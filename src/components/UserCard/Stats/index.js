import React from 'react'
import { Flex, Box } from '@rebass/grid'
import Devider from './Devider'
import Title from './Title'
import Count from './Count'

const Stats = ({ claims, evidences }) => (
  <Flex justifyContent="space-around" mt={10}>
    <Box>
      <Title>Claims</Title>
      <Count>{claims}</Count>
    </Box>
    <Devider />
    <Box>
      <Title>Evidences</Title>
      <Count>{evidences}</Count>
    </Box>
  </Flex>
)

export default Stats
