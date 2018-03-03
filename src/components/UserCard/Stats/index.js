import React from 'react'
import { Flex, Box } from 'grid-styled'
import Devider from './Devider'
import Title from './Title'
import Count from './Count'

const Stats = ({ claims = 21, reports = 30 }) => (
  <Flex justify="space-around" mt={10}>
    <Box>
      <Title>Claims</Title>
      <Count>{claims}</Count>
    </Box>
    <Devider />
    <Box>
      <Title>Reports</Title>
      <Count>{reports}</Count>
    </Box>
  </Flex>
)

export default Stats
