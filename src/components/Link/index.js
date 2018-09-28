import React from 'react'
import urlMask from 'utils/urlMask'
import H3 from './H3'
import Tag from './Tag'
import Url from './Url'

const Link = ({ title, link, tags }) => (
  <a>
    <div>
      <H3>{title} <Url>{urlMask(link)}</Url></H3>

      <div>
        {tags.map(tag => (
          <Tag key={tag.id}>
            {tag.title}
          </Tag>
        ))}
      </div>
    </div>
  </a>
)

export default Link
