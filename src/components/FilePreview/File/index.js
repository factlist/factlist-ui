import React from 'react'
import Container from './Container'
import Img from './Img'
import RemoveButton from './RemoveButton'

const File = ({ file, onRemove }) => (
  <Container>
    <RemoveButton onClick={() => onRemove(file)} />

    <Img src={file.preview} />
  </Container>
)

export default File
