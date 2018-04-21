import React from 'react'
import styled from 'styled-components'

const A = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 12px;
  background-color: #FFF;
  border: 1px solid #E0E0E0;
  color: #000;
  cursor: pointer;
  display: inline-block;
  user-select: none;
  padding: 13px 30px;
`

export default ({ onClick }) => (
  <A onClick={onClick}>Sign in</A>
)
