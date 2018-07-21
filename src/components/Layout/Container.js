import React from 'react'
import { Flex } from 'grid-styled'

export default ({ children, className }) => (
  <Flex className={className} justifyContent="center" flexWrap="wrap">
    {children}
  </Flex>
)
