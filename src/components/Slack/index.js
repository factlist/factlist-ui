import React from 'react'
import { Flex, Box } from 'grid-styled'
import Container from './Container'
import Img from './Img'
import A from './A'

const Slack = () => (
  <Container>
    <Flex justify="center" align="center">
      <Box>
        <Img src="images/slack.svg" title="Slack" />
      </Box>
      <Box>
        <A href="">Join our Slack community</A>
      </Box>
    </Flex>
  </Container>
)

export default Slack
