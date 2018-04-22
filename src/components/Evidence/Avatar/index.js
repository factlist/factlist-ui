import React from 'react'
import A from './A'
import Img from './Img'

// @TODO Add default avatar
const Avatar = ({ src = '/images/example-avatar.png' }) => (
  <A>
    <Img src={src} />
  </A>
)

export default Avatar
