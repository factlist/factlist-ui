import React from 'react'
import Container from './Container'
import List from './List'
import Item from './Item'
import Link from './Link'
import Copyright from './Copyright'

const Footer = () => (
  <Container>
    <List>
      <Item>
        <Link href="">About</Link>
      </Item>
      <Item>
        <Link href="">Help</Link>
      </Item>
      <Item>
        <Link href="">Terms and Conditions</Link>
      </Item>
      <Item>
        <Link href="">Privacy</Link>
      </Item>
      <Item>
        <Link href="">Contact</Link>
      </Item>
      <Item>
        <Link href="">Feedback</Link>
      </Item>
    </List>

    <Copyright>Factlist 2017</Copyright>
  </Container>
)

export default Footer
