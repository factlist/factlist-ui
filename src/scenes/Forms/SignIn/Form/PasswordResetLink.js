import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Div = styled.div`
  margin-top: 5px;
`

const StyledLink = styled(Link)`
  font-size: 12px;
  font-weight: 400;
  color: rgba(0,0,0,0.60);
`

export default () => (
  <Div>
    <StyledLink to="/password-reset">Forgot password?</StyledLink>
  </Div>
)
