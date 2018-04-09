import React from 'react'
import styled from 'styled-components'

const Icon = props => (
  <svg viewBox="0 0 1792 1792" width="1em" height="1em" {...props}>
    <path fill="#FFF" d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" />
  </svg>
)

const StyledIcon = styled(Icon)`
  width: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`

export default StyledIcon
