import React from 'react'
import { Flex, Box } from 'grid-styled'
import Timeago from 'components/Timeago'
import Container from './Container'
import Avatar from './Avatar'
import Profile from './Profile'
import FullName from './FullName'
import Username from './Username'
import Description from './Description'
import Attachments from '../Attachments'

const Evidence = ({ evidence }) => (
  <Container>
    <Flex justify="space-between">
      <Box>
        <Avatar />
        <Profile>
          <FullName>{evidence.user.username}</FullName>
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
          status={evidence.conclusion}
          text={evidence.text} />

        <Attachments
          links={evidence.links}
          files={evidence.files} />
      </Box>
    </Flex>
  </Container>
)

export default Evidence
