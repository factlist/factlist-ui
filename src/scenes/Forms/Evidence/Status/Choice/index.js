import React from 'react'
import Span from './Span'
import Input from './Input'
import Label from './Label'

const Choice = ({
  id,
  name,
  value,
  label,
  color,
  onChange
}) => (
  <Span>
    <Input
      type="radio"
      id={id}
      name={name}
      value={value}
      color={color}
      onChange={onChange}
    />
    <Label htmlFor={id}>{label}</Label>
  </Span>
)

export default Choice
