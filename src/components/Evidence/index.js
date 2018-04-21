import React from 'react'
import Container from './Container'
import { Flex, Box } from 'grid-styled'
import Timeago from 'scenes/Timeago'
import Avatar from './Avatar'
import Profile from './Profile'
import FullName from './FullName'
import Username from './Username'
import Description from './Description'

const Evidence = ({ evidence }) => (
  <Container>
    <Flex justify="space-between">
      <Box>
        <Avatar />
        <Profile>
          <FullName>Şerafettin Yarar</FullName>
          <Username>@{evidence.user.username}</Username>
        </Profile>
      </Box>
      <Box>
        <Timeago date={evidence.created_at} />
      </Box>
    </Flex>

    <Flex column mt={10}>
      <Box ml={50}>
        <Description
          type={evidence.status}
          text={evidence.text} />
      </Box>
    </Flex>
  </Container>
)

export default Evidence
