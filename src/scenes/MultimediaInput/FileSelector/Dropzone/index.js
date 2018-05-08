import React from 'react'
import Container from './Container'
import StyledDropzone from './StyledDropzone'
import Icon from './Icon'

export default ({ ...rest }) => (
  <Container>
    <StyledDropzone {...rest}>
      <Icon />
    </StyledDropzone>
  </Container>
)
