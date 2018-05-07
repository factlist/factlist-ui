import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  padding: 0;
  margin: 0;
  margin-top: 1px;
  font-size: 11px;
  word-wrap: break-word;
`

const TEXT_LIMIT = 44

export default ({ title }) => <Title>{title.substr(0, TEXT_LIMIT)}</Title>
