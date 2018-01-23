import React from 'react'
import Title from './Title'
import Item from './Item'
import List from './List'
import Link from './Link'

const Topics = ({ title, links = []}) => (
  <div>
    <Title>{title}</Title>

    <List>
      {links.map((link, index) => (
        <Item key={index}>
          <Link href="">{link.title}</Link>
        </Item>
      ))}
    </List>
  </div>
)

export default Topics
