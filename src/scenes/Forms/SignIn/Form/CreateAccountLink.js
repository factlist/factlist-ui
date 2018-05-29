import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const P = styled.p`
  font-size: 12px;
  color: rgba(0,0,0,0.60);
  text-align: right;
  margin: 0;
`

const StyledLink = styled(Link)`
  color: rgba(0,0,0,0.70);
`

export default () => (
  <P>
    No account? <StyledLink to="sign_up">Create one.</StyledLink>
  </P>
)
