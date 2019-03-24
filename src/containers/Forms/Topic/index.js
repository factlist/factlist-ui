import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Flex, Box } from '@rebass/grid';
import Container from './Container';
import Header from './Header';
import TopicForm from './Form';
import LinkPage from '../Link';
import LinkForm from '../Link/Form';
import Separator from 'components/Separator';
import LinkList from '../Link/LinkList';
import TagInput from 'components/TagInput';

class TopicPage extends React.Component {
  handleLinkOnSubmit = this.handleLinkOnSubmit.bind(this);

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
    tags: ['tag1', 'tag2', 'tag2', 'tag4']
  };

  onSubmit(values) {
    console.log(values);
  }

  handleLinkOnSubmit(values) {
    console.log(values);
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
                <LinkList
                  title="Son dakika: Merkez repo ihalelerine ara verdi - Ekonomi haberleri"
                  url="https://www.sozcu.com.tr/2019/ekonomi/son-dakika-merkez-repo-ihalelerine-ara-verdi-4090680/"
                />
              </Box>
              <TagInput tags={this.state.tags} />
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

export default connect(null, null)(TopicPage);
