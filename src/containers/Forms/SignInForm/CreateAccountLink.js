import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const P = styled.p`
  text-align: center;
  font-size: 17px;
  font-weight: 400;
  color: rgba(0,0,0,0.45);
  margin-top: 50px;
  margin-bottom: 30px;
`

const StyledLink = styled(Link)`
  color: rgba(0,0,0,0.70);
  text-decoration: none;
`

export default () => (
  <P>
    No account? <StyledLink to="sign_up">Create one.</StyledLink>
  </P>
)
