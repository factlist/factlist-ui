import React from 'react'


const Image = ({ image: { src, title } }) =>
  <img
    src={src}
    alt={title}
    style={{width: '100%'}}
  />

export default Image
