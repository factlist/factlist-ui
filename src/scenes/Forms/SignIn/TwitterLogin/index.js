import React from 'react'
import { Flex, Box } from 'grid-styled'
import A from './A'
import Img from './Img'

export default ({ onClick }) => (
  <A onClick={onClick}>
    <Flex justify="center">
      <Box><Img src="/images/icons/twitter.svg" /></Box>
      <Box mx="auto">Login with Twitter</Box>
    </Flex>
  </A>
)
