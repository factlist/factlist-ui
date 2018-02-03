import React from 'react'
import Span from './Span'
import Input from './Input'
import Label from './Label'

const Choice = ({ id, name, label, color }) => (
  <Span>
    <Input type="radio" id={id} name={name} color={color} />
    <Label htmlFor={id}>{label}</Label>
  </Span>
)

export default Choice
