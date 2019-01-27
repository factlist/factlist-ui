import React, { Fragment } from 'react'
import { graphql, Mutation, Query } from "react-apollo";
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Title from '../Title'
import TitleInput from '../TitleInput'
import Menu from '../Menu'
import Link from '../Link'
import Container from '../Container'
import NewLink from 'components/Link/New'
import NewTag from 'components/Tag/New'
import TopNavigation from 'components/TopNavigation';
import Topic from '../index'
import CREATE_TOPIC from '../../../graphql/mutations/createTopic';
import GET_PREVIEW_LINK from '../../../graphql/mutations/getPreviewLink';
import client from '../../../graphql';

class TopicPage extends React.Component {
  state = {
    topic: {
      title: '',
      links: []
    },
    link: {}
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { link } = nextState;
    return (
      this.state.link.url !== link.url ||
      this.state.link.description !== link.description
    )
  }

  async componentDidUpdate(prevProps, prevState) {
    const { link } = this.state;
    if (prevState.link !== link) {
      const { data } = await this.props.mutate({
        variables: {url: link.url}
      });
      const { description } = data.getPreviewLink;
      this.setState({
        link: {
          ...this.state.link,
          description
        }
      })
    }
  }

  onSaveLink() {

  }

  handleTopic = (input) => (e) => {
    switch (input) {
      case 'title':
      this.setState({
        topic: {
          ...this.state.topic,
          title: e.target.value
        }
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      link: {
        ...this.state.link,
        url: e.target.value
      }
    })
  }

  render() {
    const { isEdit, setIsEdit, marginBottom } = this.props;
    const { topic, link } = this.state;

    return (
       <Fragment>
       <Mutation mutation={CREATE_TOPIC}>
          {(createTopic, { data }) => (
            <TopNavigation onClickSave={this.onClickSave} />
          )}
        </Mutation>
        <Box mb={marginBottom}>
          <Container>
            <Flex justifyContent='space-between'>
              <Box width={1}>
                <Input
                  placeholder="New Topic"
                  onChange={this.handleTopic('title')}
                  value={topic.title}
                />
              </Box>
              <Box ml={10}>
                <Menu setIsEdit={setIsEdit} />
              </Box>
            </Flex>
              <Flex flexDirection='column' mt={30}>
                {!!topic.links && topic.links.map(link => (
                  <Box key={link.id}>
                    <Link title={link.title} url={link.url} tags={link.tags} editable={isEdit} />
                    <NewTag />
                  </Box>
                ))}
              </Flex>
              {topic.links.map(link => {
                return (
                  <Topic />
                )
              })}
              {link && <h3>{link.description}</h3> /*Dummy component*/}
              <NewLink
                url={link.url}
                onChange={(e) => this.handleChange(e)}
                onSave={() => this.onSaveLink()}
              />
          </Container>
        </Box>
      </Fragment>
    )
  }
}

const Input = styled.input`
  color: #2C8D16;
  font-size: 14px;
  margin: 0px;
  border: 0;
  &:focus {
    outline: none !important
  };
  &.hovered {
    cursor: pointer;
  };
`;

TopicPage.defaultProps = {
  marginBottom: '30px',
  topic: {
    id: null,
    title: 'Topic title',
    createdAt: 'created at',
    links: []
  }
};

const graphqlComponent = graphql(GET_PREVIEW_LINK)(TopicPage)
export default connect()(graphqlComponent);

