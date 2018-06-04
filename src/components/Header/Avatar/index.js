import React from 'react'
import Link from './Link'
import Img from './Img'

const Avatar = ({ src }) => (
  <Link to="/settings">
    <Img src={src} />
  </Link>
)

export default Avatar
