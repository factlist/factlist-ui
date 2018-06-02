import React from 'react'
import A from './A'
import Img from './Img'

const FileSwitch = ({ onClick }) => (
  <A onClick={onClick}>
    <Img src="/images/icons/image.svg" />
    Add image or video
  </A>
)

export default FileSwitch
