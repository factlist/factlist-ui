import React from 'react'
import styled from 'styled-components'
import _ from 'utils/_'

const FileSize = styled.span`
  display: block;
  font-size: 12px;
  color: #009933;
`

export default ({ size }) => (
  <FileSize>{_.getFileSize(size)}</FileSize>
)
