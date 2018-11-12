import React from 'react'
import { Flex } from '@rebass/grid'

export default ({ children, className }) => (
  <Flex className={className} justifyContent="center" flexWrap="wrap">
    {children}
  </Flex>
)
