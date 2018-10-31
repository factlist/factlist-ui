import React from 'react'
import H3 from './H3'
import MaskedURL from '../MaskedURL'

const Title = ({ title, url }) => (
  <H3>{title} <MaskedURL url={url} /></H3>
)

export default Title
