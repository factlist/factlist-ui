import React, { Fragment } from 'react'
import { graphql } from "react-apollo";
import { connect } from 'react-redux'
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
      title: '',
    },
    tagInput: {
      title: '',
    },
    tags: [],
  }


  render() {
    const { topic } = this.state;
    return (
       <Fragment>
          <Header />
          <Box>
            <Container>
              <Flex justifyContent='space-between'>
                <Box width={1}>
                  <Input
                    placeholder="New Topic"
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
                title={this.state.linkInput.title}
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

