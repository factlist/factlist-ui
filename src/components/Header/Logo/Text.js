import React from 'react'
import styled from 'styled-components'

const Text = styled.h1`
  font-family: "Times New Roman", Times, serif;
  font-size: 31px;
  color: #000000;
  margin: 0;
  display: none;

  @media (max-width: 730px) {
    display: block;
  }
`

export default () => (
  <Text>Factlist</Text>
)
