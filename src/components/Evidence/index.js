import React from 'react'
import Container from './Container'
import { Flex, Box } from 'grid-styled'
import Timeago from '../Timeago'
import Avatar from './Avatar'
import Profile from './Profile'
import FullName from './FullName'
import Username from './Username'
import Description from './Description'

const Evidence = () => (
  <Container>
    <Flex justify="space-between">
      <Box>
        <Avatar src="images/example-avatar-2.png" />
        <Profile>
          <FullName>Ali Çavdar</FullName>
          <Username>@alicavdar</Username>
        </Profile>
      </Box>
      <Box>
        <Timeago date="2018-01-24 13:00:00" />
      </Box>
    </Flex>

    <Flex column mt={20}>
      <Box>
        <Description type="true" text="Trump-Russia probe: Mueller 'requests emails' from Cambridge Analytica firm linked to 2016 campaign and Brexit" />
      </Box>
      <Box>
      </Box>
    </Flex>
  </Container>
)

export default Evidence
