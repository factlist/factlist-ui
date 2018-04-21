import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

const A = styled.a`
  display: block;
  background: #FFFFFF;
  border: 1px solid #1B95E0;
  border-radius: 2px;
  font-weight: 400;
  font-size: 16px;
  color: #1B95E0;
  padding: 14px 20px;
  cursor: pointer;
`

const Img = styled.img`
  width: 19px;
  height: 19px;
`

export default ({ onClick }) => (
  <A onClick={onClick}>
    <Flex justify="center">
      <Box><Img src="/images/icons/twitter.svg" /></Box>
      <Box mx="auto">Login with Twitter</Box>
    </Flex>
  </A>
)
