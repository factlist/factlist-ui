import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: 25px;

  // Centering
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default () => <Img src="/images/icons/add-media.svg" />
