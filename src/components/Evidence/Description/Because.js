import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.color};
  line-height: 20px;
`

const texts = {
  'true': {
    color: '#4CAF50',
    text: 'True because:'
  },
  'false': {
    color: '#FF6947',
    text: 'False because:'
  },
  'inconclusive': {
    color: '#FFB747',
    text: 'Inconclusive because:'
  }
}

export default ({ status }) => {
  const textStatus = texts[status]

  return <Span color={textStatus.color}>{textStatus.text}</Span>
}

