import React from 'react'
import styled from 'styled-components'
import _ from 'utils/_'

const Span = styled.span`
  display: block;
  font-size: 12px;
  color: #009933;
`

export default ({ size }) => (
  <Span>{_.getFileSize(size)}</Span>
)
