import React from 'react'
import styled from 'styled-components'

const Domain = styled.p`
  font-size: 12px;
  margin: 0;
  margin-top: 5px;
  opacity: 0.5;
`

export default ({ domain }) => {
  const temp = document.createElement('a')
  temp.href = domain

  return <Domain>{temp.hostname}</Domain>
}
