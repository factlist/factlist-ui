import React from 'react'
import Container from './Container'
import Img from './Img'
import RemoveButton from '../../RemoveButton'

const File = ({ file, onRemove }) => (
  <Container>
    <Img src={file.source.preview} />

    <RemoveButton onClick={() => onRemove(file)} />
  </Container>
)

export default File
