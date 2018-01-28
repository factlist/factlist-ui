import React from 'react'
import Because from './Because'
import P from './P'

const Description = ({ text, type }) => (
  <P>
    <Because>True because: </Because>{text}
  </P>
)

export default Description
