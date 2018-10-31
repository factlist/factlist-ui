import React from 'react'
import Container from './Container'
import List from './List'
import Item from './Item'
import Separator from './Separator'

const Nav = () => (
  <Container>
    <nav role='menu' outline='none'>
      <List>
        <Item>Edit</Item>
        <Item>Embed</Item>
      </List>

      <Separator />

      <List>
        <Item style={{ color: '#BF0E08' }}>Delete</Item>
      </List>
    </nav>
  </Container>
)

export default Nav
