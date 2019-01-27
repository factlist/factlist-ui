import React, { Fragment } from 'react'
import { withState } from 'recompose'
import styled from 'styled-components'
import Title from './Title'
import Input from './Input'
import LinkIcon from './LinkIcon'
import MaskedURL from './MaskedURL'
import Tag from 'components/Tag';

const enhance = withState('title', 'setTitle', props => props.title)

const Link = ({
  title,
  setTitle,
  url,
  tags,
  editable
}) => (
    <Fragment>
      <StyledDiv>
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
            <LinkIcon />
          </StyledLinkIconContainer>
          <MaskedURL url={url} />
        </StyledLinkContainer>
      </StyledDiv>
      {tags.map(tag => {
        console.log(tag, "TAG")
        return (<Tag>{tag.title}</Tag>)
      })}
    </Fragment >
  )

export default enhance(Link)

const StyledDiv = styled.div`
  padding-left: 20px;
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
