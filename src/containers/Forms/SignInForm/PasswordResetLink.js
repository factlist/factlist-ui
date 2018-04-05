import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Div = styled.div`
  text-align: right;
  margin-top: 15px;
`

const StyledLink = styled(Link)`
  font-size: 15px;
  font-weight: 400;
  color: rgba(0,0,0,0.45);
  text-decoration: none;
`

export default () => (
  <Div>
    <StyledLink to="/password-reset">Forgot email or password?</StyledLink>
  </Div>
)
