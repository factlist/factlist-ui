import React from 'react'
import Container from './Container'
import List from './List'
import Item from './Item'
import StyledLink from './StyledLink'
import Separator from './Separator'

const Nav = ({ setIsOpen, setIsEdit, topicId }) => (
  <Container>
    <nav role='menu' outline='none'>
      <List>
        <StyledLink onClick={() => {
          setIsOpen(false);
          setIsEdit(true);
        }} to={`topic/${topicId}/edit`}>Edit</StyledLink>
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
