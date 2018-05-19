import React from 'react'
import Because from './Because'
import P from './P'
import Linkify from 'components/Linkify'

const Description = ({ status, text }) => (
  <P>
    <Because status={status} /> <Linkify>{text}</Linkify>
  </P>
)

export default Description
