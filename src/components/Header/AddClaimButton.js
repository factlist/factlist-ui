import React from 'react'
import styled from 'styled-components'

const A = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 12px;
  background-color: #000;
  border: 1px solid #000;
  color: #FFF;
  cursor: pointer;
  display: inline-block;
  user-select: none;

  padding: 13px 30px;

  @media (max-width: 730px) {
    padding: 8px 13px;
  }
`

export default ({ onClick }) => (
  <A onClick={onClick}>Add claim</A>
)
