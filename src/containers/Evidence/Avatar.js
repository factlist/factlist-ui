import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 25px;
`

export default ({ src = '/images/example-avatar.png' }) => (
  <Img src={src} />
)
