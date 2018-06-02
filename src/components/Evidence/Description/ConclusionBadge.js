import React from 'react'
import styled from 'styled-components'
import colors from 'core/colors'

const Label = styled.label`
  font-size: 13px;
  line-height: 22px;
  background-color: ${props => props.color};
  color: #FFF;
  font-weight: 500;
  display: inline-block;
  padding: 0 8px;
  border-radius: 2px;
  vertical-align: bottom;
  margin-right: 8px;
  margin-bottom: 3px;
`

const conclusions = {
  'true': {
    color: colors.conclusions['true'],
    text: 'True',
  },
  'false': {
    color: colors.conclusions['false'],
    text: 'False',
  },
  'inconclusive': {
    color: colors.conclusions['inconclusive'],
    text: 'Inconclusive',
  }
}

export default ({ conclusion }) => {
  const data = conclusions[conclusion]

  return <Label color={data.color}>{data.text}</Label>
}

