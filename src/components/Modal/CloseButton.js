import React from 'react'
import styled from 'styled-components'

const A  = styled.a`
  display: block;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`

export default ({ onClick }) => (
  <A onClick={onClick}>
    <img src="/images/icons/close.svg" alt="Close" width={20} height={20} />
  </A>
)
