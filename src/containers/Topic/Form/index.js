import React, { Fragment } from 'react';
import { Flex, Box } from '@rebass/grid';

import Container from './Container';
import Header from './Header';
import NewLink from './NewLink';
import Link from './Link';
import Separator from 'components/Separator';
import Title from 'components/Topic/Title'

import TopicFormContext from 'containers/Topic/Form/TopicFormContext'

class TopicForm extends React.Component {
  state = {
    isEdit: true,
    topic: {
      title: 'Deneme'
    },
    links: [],
    isOpen: false,
    setTitle: (title) => {
      this.setState({
        topic: {
          ...this.state.topic,
          title
        }
      })
    },
    getLink: (url) => {
      console.log('get', url)
      return this.state.links.find((link) => link.url === url);
    },
    addLink: (url) => {


      const linkInput = {
        url: url,
        title: 'title',
        tags: [],

      };

      console.log('Xadd', linkInput)

      this.setState({
        links: this.state.links.concat(linkInput)
      });
      console.log('Xstate', this.state.links)

    },
    deleteLink: (url) => {
      this.setState({
        links: this.state.links.filter(item => item.url !== url)
      });
    },
    addTag: (url, tag) => {
      const links = this.state.links.map(item => {
        if (item.url === url) {
          item.tags.push(tag);
        }
        return item;
      });
      this.setState({
        links: links
      });
    },
    deleteTag: (url, tag) => {
      const links = this.state.links.map(item => {
        if (item.url === url) {
          item.tags = item.tags.filter(_tag => _tag !== tag)
        }
        return item;
      })
      this.setState({
        links: links
      });
    },
    getTags: (url) => {
      return this.state.links.find((link) => link.url === url).tags;
    }
  };

  renderLinkList() {
    return this.state.links.map((link, key) => {
      return (
        <Fragment>
          <Link key={`link-${key}`}
                url={link.url} />
          <Separator />
        </Fragment>
      );
    });
  }

  render() {
    const {topic, setTitle } = this.state;
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
              <Flex flexDirection="column" mt={30}>
                <Box mb="5px" mt="5px">
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
  marginBottom: '30px',
  topic: {
    id: null,
    title: 'Topic title',
    createdAt: 'created at',
    links: []
  }
};

export default TopicForm;
