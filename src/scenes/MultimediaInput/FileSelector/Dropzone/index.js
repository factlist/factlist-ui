import React from 'react'
import Container from './Container'
import StyledDropzone from './StyledDropzone'
import Icon from './Icon'

export default ({ innerRef, ...rest }) => (
  <Container>
    <StyledDropzone innerRef={node => innerRef(node)} {...rest}>
        <Icon />
    </StyledDropzone>
  </Container>
)
