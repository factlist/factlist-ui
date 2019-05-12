import React from 'react'
import { Flex, Box } from '@rebass/grid'
import A from './A'
import Img from './Img'

export default ({ onClick }) => (
  <A onClick={onClick}>
    <Flex justifyContent="center">
      <Box><Img src="/images/icons/twitter.svg" /></Box>
      <Box mx="auto">Login with Twitter</Box>
    </Flex>
  </A>
)
