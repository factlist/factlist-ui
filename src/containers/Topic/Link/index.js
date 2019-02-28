import React, { Fragment } from 'react'
import { withState } from 'recompose'
import { graphql } from "react-apollo";
import styled from 'styled-components'
import Title from './Title'
import Input from './Input'
import LinkIcon from './LinkIcon'
import MaskedURL from './MaskedURL'
import Tag from './Tag';
import DELETE_TAG from '../../../graphql/mutations/deleteTag';
import UPDATE_TAG from '../../../graphql/mutations/updateTag';

const enhance = withState('title', 'setTitle', props => props.title)

class Link extends React.Component {
  state = {
    isVisible: true,
    tagInput: '',
    tags: []
  }


  onChangeTag(e) {
    this.props.onChangeTag(e)
  }

  render() {
    const { title, setTitle, url, tags, editable, onSaveTag, onChangeTag, handleRemoveTag, tagInput } = this.props;
    return (
      <Fragment>
        { editable && <DeleteLink>x</DeleteLink> }
        <StyledDiv editable={editable}>
          {
            editable ?
              <Input
                type='text'
                value={title}
                onChange={event => setTitle(event.target.value)} /> :
              <Title title={title} />
          }
          <StyledLinkContainer>
            <StyledLinkIconContainer>
              {editable && <LinkIcon />}
            </StyledLinkIconContainer>
            <MaskedURL url={url} />
          </StyledLinkContainer>
        </StyledDiv>
        <Tag tags={tags}
             value={tagInput}
             onSave={onSaveTag}
             onChange={onChangeTag}
             onRemove={() => handleRemoveTag()}
             editable={editable}
        />
      </Fragment>
    )
  }
}

export default enhance(graphql(DELETE_TAG, UPDATE_TAG)(Link))

const StyledDiv = styled.div`
  padding-left: ${props => (props.editable ? '20px;' : '0px')};
`
const StyledLinkContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 30px;
`
const StyledLinkIconContainer = styled.div`
  position: absolute;
  left: -20px;
  padding-bottom: 4px;
`
const DeleteLink = styled.span`
  float: right;
  padding-right: 10px;
`
