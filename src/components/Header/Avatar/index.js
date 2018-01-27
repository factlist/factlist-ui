import React from 'react'
import A from './A'
import Img from './Img'

const Avatar = ({ src, onClick }) => (
  <A onClick={onClick}>
    <Img src={src} />
  </A>
)

export default Avatar
