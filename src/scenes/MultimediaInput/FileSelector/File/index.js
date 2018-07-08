import React from 'react'
import Container from './Container'
import Img from './Img'
import Loading from './Loading'
import RemoveButton from '../../RemoveButton'

const File = ({ file, onRemove }) => (
  <Container>
    {!file.requesting && <Img src={file.source.preview} />}
    {!file.requesting && <RemoveButton onClick={() => onRemove(file)} />}
    {file.requesting && <Loading />}
  </Container>
)

export default File
