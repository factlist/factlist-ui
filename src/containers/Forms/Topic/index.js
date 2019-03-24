import React, { Fragment } from 'react';
import { Flex, Box } from '@rebass/grid';
import Container from './Container';
import Header from './Header';
import TopicForm from './Form';
import LinkPage from '../Link';
import LinkForm from '../Link/Form';
import Link from '../../Topic/Link'
import Separator from 'components/Separator'
import LinkList from '../Link/LinkList';

class TopicPage extends React.Component {
  state = {
    topic: {
      title: '',
      links: []
    },
    linkInput: {
      url: '',
      title: ''
    },
    tagInput: {
      title: ''
    },
    tags: []
  };

  onSubmit() {
    alert('submit');
  }

  handleLinkOnSubmit() {
    alert('aa');
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Box>
          <Container>
            <TopicForm onSubmit={this.onSubmit} />
            <LinkPage>
              <LinkForm onSubmit={this.handleLinkOnSubmit} />
            </LinkPage>
            <Flex flexDirection="column" mt={30}>
              <Box mb="5px" mt="5px" key="aa">
                <LinkList title="Google" url="http://google.com" />
                <Separator />
                <LinkList title="Facebook" url="http://facebook.com" />
              </Box>
            </Flex>
          </Container>
        </Box>
      </Fragment>
    );
  }
}

TopicPage.defaultProps = {
  marginBottom: '30px',
  topic: {
    id: null,
    title: 'Topic title',
    createdAt: 'created at',
    links: []
  }
};

export default TopicPage;
