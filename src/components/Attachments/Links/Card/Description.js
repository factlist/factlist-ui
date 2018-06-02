import React from 'react'
import styled from 'styled-components'

const Description = styled.p`
  padding: 0;
  margin: 0;
  margin-top: 1px;
  font-size: 11px;
  word-wrap: break-word;
`

const CHAR_LIMIT = 60

export default ({ description }) => (
  <Description>
    {description.substr(0, CHAR_LIMIT)}
    {description.length > CHAR_LIMIT && '...'}
  </Description>
)
