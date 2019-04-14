import React, { Fragment } from 'react';
import { Flex, Box } from '@rebass/grid';

import Container from './Container';
import Header from './Header';
import NewLink from './NewLink';
import Link from './Link';
import Separator from 'components/Separator';
import Title from 'components/Topic/Title'

import {
  getTopic, createTopic, updateTitle,
  createLink, deleteLink, addTag, removeTag
} from 'modules/topic/requests'

import TopicFormContext from 'containers/Topic/Form/TopicFormContext'

class TopicForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: true,
      isReady: false,
      topic: {
        id: props.id,
        title: '',
        links: [],
      },
      filterTopic: ({ id, title, links }) => {
        return {id, title, links}
      },
      setTitle: async (title) => {
        let { topic: { id } } = this.state;
        let topic = id
                  ? await updateTitle({id, title})
                  : await createTopic({ title });
        topic = this.state.filterTopic(topic);
        this.setState({
          topic: {
            ...this.state.topic,
            ...topic
          }
        })
      },
      getLink: (id) => {
        return this.state.topic.links.find((link) => link.id === id);
      },
      addLink: async (url) => {
        let topic = this.state.topic;

        const topic_id = topic.id;
        const linkInput = { url, tags: [] }

        if (topic_id) {
          let link = await createLink({topic_id, ...linkInput});
          topic.links = topic.links.concat(link)
        } else {
          topic = await createTopic({ links: [linkInput] });
        }

        topic = this.state.filterTopic(topic);
        this.setState({
          topic: {
            ...this.state.topic,
            ...topic
          }
        });

      },
      deleteLink: async (id) => {
        const isDeleted = await deleteLink({id})
        if (!isDeleted) { return }
        this.setState({
          topic: {
            ...this.state.topic,
            links: this.state.topic.links.filter(item => item.id !== id)
          }
        });
      },
      addTag: async (link_id, tag) => {
        let tags = [{ title: tag }]
        let links = this.state.topic.links.map(async (item) => {
          if (item.id !== link_id) { return item; }
          tags = await addTag({link_id, tags});
          let {id, title} = tags[0]
          item.tags = item.tags.concat({id, title});
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
        let data = await removeTag({link_id, tags});

        if (!data) { return }
        const links = this.state.topic.links.map(link => {
          if (link.id === link_id) {
            link.tags = link.tags.filter(tag => tag.id !== id)
          }
          return link;
        })
        console.log({links})
        this.setState({
          topic: {
            ...this.state.topic,
            links
          }
        });
      }
    }

    props.id ? this.fetchTopic(props.id) : this.state.isReady = true;
  }

  fetchTopic = async (id) => {
    const topic = await getTopic({id})
    // console.log(topic)
    this.setState({
      topic,
      isReady: true
    })
  }

  renderLinkList() {
    return this.state.topic.links.map((link, key) => {
      return (
        <Fragment>
          <Link key={`link-${key}-${link.id}`}
                id={link.id} />
          <Separator />
        </Fragment>
      );
    });
  }

  render() {
    const {topic, setTitle, isReady } = this.state;
    if(!isReady) { return (<Header />) }
    return (
      <TopicFormContext.Provider value={this.state}>
        <Header />
        <Box>
          <Container>
              <Flex flexDirection="column">
                <Box width={1}>
                  <Title title={topic.title} isEdit={true} setTitle={setTitle} />
                </Box>
              </Flex>
              <Flex flexDirection='column'>
                <Box>
                  {this.renderLinkList()}
                </Box>
              </Flex>
              <NewLink />
          </Container>
        </Box>
      </TopicFormContext.Provider>
    );
  }
}

TopicForm.defaultProps = {
  marginBottom: '0px',
  topic: {
    id: null,
    title: 'Topic title',
    createdAt: 'created at',
    links: []
  }
};

export default TopicForm;
