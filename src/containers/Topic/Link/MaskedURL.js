import React from 'react'
import styled from 'styled-components'
import urlMask from 'utils/urlMask'

const Span = styled.span`
  font-size: 12px;
  color: #2C8D16;
`

const MaskedURL = ({ url }) => (
  <Span>{urlMask(url)}</Span>
)

export default MaskedURL
