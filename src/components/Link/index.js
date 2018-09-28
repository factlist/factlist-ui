import React from 'react'
import urlMask from 'utils/urlMask'
import H3 from './H3'
import Tag from './Tag'
import Url from './Url'

const Link = ({ title, url, tags }) => (
  <a>
    <div>
      <H3>{title} <Url>{urlMask(url)}</Url></H3>

      <div>
        {tags.map(tag => (
          <Tag>{tag}</Tag>
        ))}
      </div>
    </div>
  </a>
)

export default Link
