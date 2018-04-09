import React from 'react'
import Container from './Container'
import A from './A'
import Icon from './Icon'

export default ({ onClick }) => (
  <Container>
    <A onClick={onClick}>
      <Icon />
    </A>
  </Container>
)
