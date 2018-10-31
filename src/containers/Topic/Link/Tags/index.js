import React from 'react'
import Container from './Container'
import Span from './Span'

const Tags = ({ tags }) => (
  <Container>
    {tags.map(tag => (
      <Span key={tag.id}>{tag.title}</Span>
    ))}
  </Container>
)

export default Tags
