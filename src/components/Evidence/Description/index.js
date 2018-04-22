import React from 'react'
import Because from './Because'
import P from './P'

const Description = ({ status, text }) => (
  <P>
    <Because status={status}/> {text}
  </P>
)

export default Description
