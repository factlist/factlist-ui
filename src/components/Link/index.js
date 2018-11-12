import React, { Fragment } from 'react'
import styled from 'styled-components'
import urlMask from 'utils/urlMask'
import H3 from './H3'
import Tag from './Tag'
import Url from './Url'
import { X } from 'react-feather'

const StyledXIcon = styled(X)`
  width: 12px;
  margin-left: 10px;
  height:12px;
  &:hover{
    background:gray;
  }
`

const Input = styled.input`
  border: 0;
  padding:4px  0px 2px 0px;
  border-bottom:1px dashed #80808052;
  
  resize: horizontal;
  min-width: 95%;

`
/*

*/
const Link = ({ edit = true, title, link, tags }) => (
  <a>
    <div>
      {!edit && (
        <H3>
          {title} <Url>{urlMask(link)}</Url>
        </H3>
      )}

      {edit && (
        <Fragment>
          <Fragment>
            <Input contenteditable="true" type="text" value={title} />
            <StyledXIcon />
          </Fragment>
          

          <Url>{urlMask(link)}</Url>
        </Fragment>
      )}

      <div>
        {tags.map(tag => (
          <Tag key={tag.id}>
            {tag.title}
            <StyledXIcon />
          </Tag>
        ))}
      </div>

    </div>
  </a>
)

export default Link
