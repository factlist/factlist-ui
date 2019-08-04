import React from "react";
import { Flex, Box } from "@rebass/grid";
import { Separator } from "components";
import { Layout } from "components";
import Title from "components/Topic/Title";
import client from "lib/graphql";
import Link from "./Link";
import NewLink from "./NewLink";
import {
  getTopic,
  createTopic,
  updateTitle,
  createLink,
  addTag,
  removeTag
} from "./queries";
import TopicFormContext from "./TopicFormContext";
import cm from "./topicForm.module.css";

class TopicForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: true,
      isReady: false,
      topic: {
        id: props.id,
        title: "",
        links: []
      },
      filterTopic: ({ id, title, links }) => {
        return { id, title, links };
      },
      setTitle: async title => {
        let {
          topic: { id }
        } = this.state;
        let topic = id
          ? await client
              .mutate({
                mutation: updateTitle,
                variables: { id, title }
              })
              .then(resp => resp.data.updateTopicTitle)
          : await client
              .mutate({
                mutation: createTopic,
                variables: { title }
              })
              .then(resp => resp.data.createTopic);
        topic = this.state.filterTopic(topic);
        this.setState({
          topic: {
            ...this.state.topic,
            ...topic
          }
        });
      },
      getLink: id => {
        return this.state.topic.links.find(link => link.id === id);
      },
      addLink: async url => {
        let topic = this.state.topic;

        const topic_id = topic.id;
        const linkInput = { url, title: "title", tags: [] };

        if (topic_id) {
          let link = await client
            .mutate({
              mutation: createLink,
              variables: { topic_id, ...linkInput }
            })
            .then(resp => resp.data.createLink);

          topic.links = topic.links.concat(link);
        } else {
          topic = await client
            .mutate({
              mutation: createTopic,
              variables: { links: [linkInput] }
            })
            .then(resp => resp.data.createTopic);
        }

        topic = this.state.filterTopic(topic);
        this.setState({
          topic: {
            ...this.state.topic,
            ...topic
          }
        });
      },
      deleteLink: url => {
        this.setState({
          links: this.state.topic.links.filter(item => item.url !== url)
        });
      },
      addTag: async (link_id, tag) => {
        let tags = [{ title: tag }];
        let links = this.state.topic.links.map(async item => {
          if (item.id !== link_id) {
            return item;
          }
          tags = await client
            .mutate({
              mutation: addTag,
              variables: { link_id, tags }
            })
            .then(resp => resp.data.addTag);

          let { id, title } = tags[0];
          item.tags = item.tags.concat({ id, title });
          return item;
        });
        Promise.all(links).then(links => {
          this.setState({
            topic: {
              ...this.state.topic,
              links
            }
          });
        });
      },
      deleteTag: async (link_id, id) => {
        let tags = [{ id }];
        let data = await client
          .mutate({
            mutation: removeTag,
            variables: { link_id, tags }
          })
          .then(resp => resp.data.removeTag);

        if (!data) {
          return;
        }
        const links = this.state.topic.links.map(item => {
          if (item.link_id === link_id) {
            item.tags = item.tags.filter(tag => tag.id !== id);
          }
          return item;
        });
        this.setState({
          topic: {
            ...this.state.topic,
            links
          }
        });
      }
    };

    props.id ? this.fetchTopic(props.id) : (this.state.isReady = true);
  }

  fetchTopic = async id => {
    const topic = await client
      .query({
        query: getTopic,
        variables: { id }
      })
      .then(resp => resp.data.topic);

    // console.log(topic)
    this.setState({
      topic,
      isReady: true
    });
  };

  renderLinkList() {
    return this.state.topic.links.map((link, key) => (
      <>
        <Link key={`link-${key}-${link.id}`} id={link.id} />
        <Separator />
      </>
    ));
  }

  render() {
    const { topic, setTitle, isReady } = this.state;

    if (!isReady) return <Layout />;

    return (
      <Layout topic onBack={() => {}}>
        <TopicFormContext.Provider value={this.state}>
          <Box>
            <div className={cm.container}>
              <Flex flexDirection="column">
                <Box width={1}>
                  <Title
                    title={topic.title}
                    isEdit={true}
                    setTitle={setTitle}
                  />
                </Box>
              </Flex>

              <Flex flexDirection="column">
                <Box>{this.renderLinkList()}</Box>
              </Flex>

              <NewLink />
            </div>
          </Box>
        </TopicFormContext.Provider>
      </Layout>
    );
  }
}

TopicForm.defaultProps = {
  marginBottom: "0px",
  topic: {
    id: null,
    title: "Topic title",
    createdAt: "created at",
    links: []
  }
};

export default TopicForm;

/* const Header = ({ onSave }) => (
  <Flex className={cm.header} justifyContent="center" alignItems="center">
    <Box>
      <Logo />
    </Box>

    <Box>
      <Button
        to="/"
        primary={false}
        redirect
        children="Cancel"
        style={{ marginRight: 20 }}
      />

      <Button onClick={onSave} primary={false} children="Save" />
    </Box>
  </Flex>
); */
