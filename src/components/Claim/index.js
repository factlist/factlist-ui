import React from 'react'
import { Flex, Box } from 'grid-styled'
import Container from './Container'
import Status from './../Status'
import Title from './Title'
import Img from './Img'
import Timeago from './../Timeago'

const Claim = () => (
  <Container>
    <Flex justify="space-between" align="center">
      <Box>
        <Status trueCount={1} falseCount={2} inConclusiveCount={1} />
      </Box>
      <Box>
        <Timeago date="2018-05-01 13:00:00" />
      </Box>
    </Flex>

    <Flex column mt={20}>
      <Box>
        <Title>Brexit - live updates: Theresa May waits on European leaders' decision after climbdown on trade talks</Title>
      </Box>
      <Box>
        <Img src="images/example-claim.png" />
      </Box>
    </Flex>
  </Container>
)

export default Claim
