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
`

const Input = styled.input`
  border: 0;
  width: 100%;
`

const Link = ({ edit = false, title, link, tags }) => (
  <a>
    <div>
      {!edit && (
        <H3>
          {title} <Url>{urlMask(link)}</Url>
        </H3>
      )}

      {edit && (
        <Fragment>
          <Input type="text" value={title} />
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
