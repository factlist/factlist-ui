import React from 'react'
import Img from './Img'

const Image = ({ image: { src, title } }) => (
    <Img src={src} alt={title} />
)

export default Image
