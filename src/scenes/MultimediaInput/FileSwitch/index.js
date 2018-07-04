import React from 'react'
import DropzoneHOC from '../Dropzone'
import StyledDropzone from './StyledDropzone'
import Container from './Container'
import Img from './Img'

const FileSwitch = ({ acceptedFileTypes, onDrop }) => (
  <Container>
    <StyledDropzone accept={acceptedFileTypes} onDrop={onDrop}>
      <Img src="/images/icons/image.svg" />
      Add image or video
    </StyledDropzone>
  </Container>
)

export default DropzoneHOC(FileSwitch)
