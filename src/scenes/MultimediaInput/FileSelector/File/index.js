import React from 'react'
import Container from './Container'
import Img from './Img'

const File = ({ file }) => (
  <Container>
    <Img src={file.preview} />
  </Container>
)

export default File
