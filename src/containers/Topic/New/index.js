import React, { Fragment } from 'react'
import { graphql } from "react-apollo";
import { connect } from 'react-redux'
import _, { isEqual } from 'lodash';
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Link from '../Link'
import Container from '../Container'
import NewLink from 'components/Link/New'
import Separator from 'components/Separator'
import Header from './Header';
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

  async componentDidUpdate(prevProps, prevState) {
    const { linkInput, topic } = this.state;

    if (prevState.linkInput.url !== linkInput.url && linkInput.url !== '') {
      const { data } = await this.props.mutate({
        variables: { url: linkInput.url },
        mutation: GET_PREVIEW_LINK
      });

      const { description } = data.getPreviewLink;

      if (!isEqual(description, prevState.linkInput.description)) {
        this.setState({
          linkInput: {
            ...linkInput,
            description: description.substring(0, 250).concat('...'),
          }
        });
      }
    }

    if (prevState.topic.links.length !== topic.links.length) {
      this.setState({linkInput: { url: '', description: '', tags: [] }})
    }
  }

  handleInputChange = (input, index) => (e) => {
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
        return this.state;
    }
  }

  handleRemoveTag = (tag) => {
    const { topic } = this.state;
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

  onSaveTag = (index) => () => { // duzenlenmeli
    const { tagInput, topic, tags } = this.state;
    tags.push(tagInput)
    if (tagInput.title) {
      this.setState({
        topic: {
          ...topic,
          links: [
            ...topic.links,
            Object.assign(topic.links[index], {tags: tags}),
          ]
        },
      });
    }
  }

  onSaveTopic = async () => {
    const { topic } = this.state;

    if (topic.links.length && topic.title) {
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
    const { topic } = this.state;
    return (
       <Fragment>
          <Header onClickSave={this.onSaveTopic} />
          <Box>
            <Container>
              <Flex justifyContent='space-between'>
                <Box width={1}>
                  <Input
                    placeholder="New Topic"
                    onChange={this.handleInputChange('title')}
                    value={topic.title}
                  />
                </Box>
              </Flex>
              <Flex flexDirection='column' mt={30}>
                {!!topic.links && topic.links.map((link, index) => {

                  return (
                    <Box mb="5px" mt="5px" key={index}>
                      <Link
                        title={link.description}
                        url={link.url}
                        tags={link.tags}

                        tagInput={this.state.tagInput.title}
                        onChangeTag={this.handleInputChange('tagInput')}
                        onSaveTag={this.onSaveTag(index)}
                        onRemove={this.handleRemoveTag}
                        editable={true}
                      />
                      {index !== topic.links.length - 1 && <Separator/>}
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
  color: #000;
  font-size: 24px;
  margin: 0px;
  padding-left: 20px;
  border: 0;
  font-family: 'Roboto',sans-serif;
  font-weight: 500;
  line-height: 32px;
  &:placeholder {
    opacity: 0.3;
  };
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

