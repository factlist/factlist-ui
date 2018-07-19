import React from 'react'
import Dropzone from '../Dropzone'
import Container from './Container'
import Img from './Img'

const FileSwitch = ({ onDrop }) => (
  <Container>
    <Dropzone onDrop={onDrop}>
      <Img src="/images/icons/image.svg" />
      Add image or video
    </Dropzone>
  </Container>
)

export default FileSwitch
