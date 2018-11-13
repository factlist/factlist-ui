import React from 'react'
import Container from './Container'
import List from './List'
import Item from './Item'
import Separator from './Separator'

const Nav = ({ setIsOpen, setIsEdit }) => (
  <Container>
    <nav role='menu' outline='none'>
      <List>
        <Item onClick={() => {
          setIsOpen(false);
          setIsEdit(true);
        }}>Edit</Item>
        <Item onClick={() => setIsOpen(false)}>Embed</Item>
      </List>

      <Separator />

      <List>
        <Item onClick={() => setIsOpen(false)} style={{ color: '#BF0E08' }}>Delete</Item>
      </List>
    </nav>
  </Container>
)

export default Nav
