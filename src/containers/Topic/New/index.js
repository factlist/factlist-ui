import React, { Fragment } from 'react'
import { graphql, Mutation, Query } from "react-apollo";
import { connect } from 'react-redux'
import _, { isEqual, uniqueId } from 'lodash';
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Title from '../Title'
import TitleInput from '../TitleInput'
import Menu from '../Menu'
import Link from '../Link'
import Container from '../Container'
import NewLink from 'components/Link/New'
import TopNavigation from 'components/TopNavigation';
import Topic from '../index'
import CREATE_TOPIC from '../../../graphql/mutations/createTopic';
import GET_PREVIEW_LINK from '../../../graphql/mutations/getPreviewLink';

class TopicPage extends React.Component {
  state = {
    topic: {
      title: '',
      links: [],
    },
    linkInput: {
      url: '',
      description: '',
    },
    tagInput: {
      title: '',
    },
    tags: [],
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { linkInput, topic } = nextState;

    return !(
      isEqual(topic, this.state.topic) &&
      isEqual(linkInput, this.state.linkInput)
    );
  }

  async componentDidUpdate(prevProps, prevState) {
    const { linkInput, topic } = this.state;

    if (
      !isEqual(linkInput, prevState.linkInput) &&
      linkInput.url
    ) {
      const { data } = await this.props.mutate({
        variables: { url: linkInput.url },
        mutation: GET_PREVIEW_LINK
      });

      const { description } = data.getPreviewLink;

      if (!isEqual(description, prevState.linkInput.description)) {
        this.setState({
          linkInput: {
            ...linkInput,
            description,
          }
        });
      }
    }

    if (prevState.topic.links.length !== topic.links.length) {
      this.setState({linkInput: { url: '', description: '', tags: [] }})
    }
  }

  handleInputChange = (input) => (e) => {
    switch (input) {
      case 'title':
        return this.setState({
          topic: {
            ...this.state.topic,
            title: e.target.value
          }
        });
      case 'linkInput':
        return this.setState({
          linkInput: {
            ...this.state.linkInput,
            url: e.target.value
          }
        });
      case 'tagInput':
        return this.setState({
          tagInput: {
            title: e.target.value
          }
        });
      default:
        this.state;
    }
  }

  handleRemoveTag = (tag) => {
    const { tags, topic } = this.state;
    const newLinks = _.filter(topic.links, (link) => _.find(link.tags, item => item.title !== tag.title ))

    this.setState({
      topic: {
        ...topic,
        links: [
          ...topic.links,
          newLinks
        ],
      }
    });
  }

  onSaveLink = () => {
    const { linkInput, topic } = this.state;

    if (linkInput.description) {
      this.setState({
        topic: {
          ...topic,
          links: topic.links.concat(linkInput)
        },
      })
    }
  }

  onSaveTag = async () => {
    const { tagInput, topic } = this.state;
    if (tagInput) {
      this.setState({
        topic: {
          ...topic,
          links: {
            ...topic.links,
            tags: topic.links.tags.concat(tagInput)
          },
        },
      });
    }
  }

  onSaveTopic = async () => {
    const { topic } = this.state;

    if (topic.links.length) {
      await this.props.mutate({
        variables: {
          title: topic.title,
          links: topic.links
        },
        mutation: CREATE_TOPIC
      });
      this.props.history.goBack();
    } else {
      alert("Cannot create the topic!")
    }
  }

  render() {
    return (
       <Fragment>
          <TopNavigation onClickSave={this.onSaveTopic} />
          <Box>
            <Container>
              <Flex justifyContent='space-between'>
                <Box width={1}>
                  <Input
                    placeholder="New Topic"
                    onChange={this.handleInputChange('title')}
                    value={this.state.topic.title}
                  />
                </Box>
              </Flex>
              <Flex flexDirection='column' mt={30}>
                {!!this.state.topic.links && this.state.topic.links.map(link => {
                  return (
                    <Box mb="5px" mt="5px" key={uniqueId()}>
                      <Link
                        title={link.description}
                        url={link.url}
                        tags={link.tags}

                        tagInput={this.state.tagInput.title}
                        onChange={this.handleInputChange('tagInput')}
                        onSave={this.onSaveTag}
                        onRemove={this.handleRemoveTag}
                      />
                    </Box>
                  )
                })}
              </Flex>
              <NewLink
                url={this.state.linkInput.url}
                onChange={this.handleInputChange('linkInput')}
                onSave={this.onSaveLink}
                description={this.state.linkInput.description}
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

