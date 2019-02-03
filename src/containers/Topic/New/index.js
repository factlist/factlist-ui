import React, { Fragment } from 'react'
import { graphql, Mutation, Query } from "react-apollo";
import { connect } from 'react-redux'
import { isEqual, uniqueId } from 'lodash';
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
      links: [{
        url: 'https://',
        description: 'asdasd'
      }]
    },
    input: {} //url, description
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { input, topic } = nextState;

    return !(
      isEqual(topic, this.state.topic) &&
      isEqual(input, this.state.input)
    );
  }

  async componentDidUpdate(prevProps, prevState) {
    const { input, topic } = this.state;

    const { data } = await this.props.mutate({
      variables: { url: input.url },
      mutation: GET_PREVIEW_LINK
    });

    const { description } = data.getPreviewLink;
    if (description) {
      this.setState({
        ...this.state,
        input: {
          ...this.state.input,
          description
        }
      })
    }

    if (!isEqual(topic.links, prevState.topic.links)) {
      this.setState({input: {url: '', description: ''}})
    }
  }

  handleTopic = (input) => (e) => {
    switch (input) {
      case 'title':
        this.setState({
          ...this.state,
          topic: {
            ...this.state.topic,
            title: e.target.value
          }
        });
        return;
      case 'input':
        this.setState({
          input: {
            ...this.state.input,
            url: e.target.value
          }
        });
      default:
        this.state;
    }
  }

  onSaveLink() {
    if (this.state.input.description) {
      this.setState({
        topic: {
          ...this.state.topic,
          links: this.state.topic.links.concat(this.state.input)
        },
      })
    }
  }

  onSaveTopic = async() => {
    const { topic } = this.state;
    const { data } = await this.props.mutate({
      variables: {
        title: topic.title,
        links: topic.links
      },
      mutation: CREATE_TOPIC
    });
  }

  render() {
    const { marginBottom } = this.props;

    return (
       <Fragment>
          <TopNavigation onClickSave={this.onSaveTopic} />
          <Box>
            <Container>
              <Flex justifyContent='space-between'>
                <Box width={1}>
                  <Input
                    placeholder="New Topic"
                    onChange={this.handleTopic('title')}
                    value={this.state.topic.title}
                  />
                </Box>
              </Flex>
              <Flex flexDirection='column' mt={30}>
                {!!this.state.topic.links && this.state.topic.links.map(link => {
                  return (
                    <Box mb="5px" mt="5px" key={uniqueId}>
                      <Link
                        title={link.description}
                        url={link.url}
                        tags={link.tags}
                      />
                      <NewTag />
                    </Box>
                  )
                })}
              </Flex>
              <NewLink
                url={this.state.input.url}
                onChange={this.handleTopic('input')}
                onSave={() => this.onSaveLink()}
                description={this.state.input.description}
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

const graphqlComponent = graphql(GET_PREVIEW_LINK, CREATE_TOPIC)(TopicPage)
export default connect()(graphqlComponent);

