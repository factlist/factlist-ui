import React from 'react'
import styled from 'styled-components'

const Domain = styled.p`
  font-size: 11px;
  margin: 0;
  margin-top: 2px;
  opacity: 0.5;
`

const TEXT_LIMIT = 24

export default ({ url }) => {
  const temp = document.createElement('a')
  temp.href = url

  return <Domain>{temp.hostname.substr(0, TEXT_LIMIT)}</Domain>
}
