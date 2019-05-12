import React from 'react'
import styled from 'styled-components'

const A = styled.a`
  position: absolute;
  right: 12px;
  top: 7px;
  cursor: pointer;
`

const Icon = props => (
  <svg viewBox="0 0 1792 1792" width="1em" height="1em">
    <path
      d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
      fill="#fff"
    />
  </svg>
)

const Close = ({ onClick }) => (
  <A onClick={onClick}>
    <Icon />
  </A>
)

export default Close
