import React from 'react'
import { Flex, Box } from '@rebass/grid'
import { Link } from 'react-router-dom'
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
    <Flex justifyContent="space-between">
      <Box>
        <Link to={'/@' + evidence.user.username}>
          <Avatar src={evidence.user.avatar} />
          <Profile>
            <FullName>{evidence.user.name}</FullName>
            <Username>@{evidence.user.username}</Username>
          </Profile>
        </Link>
      </Box>
      <Box>
        <Timeago date={evidence.created_at} />
      </Box>
    </Flex>

    <Flex flexDirection="column" mt={10}>
      <Box ml={50}>
        <Description
          conclusion={evidence.conclusion}
          text={evidence.text} />

        <Attachments
          links={evidence.links}
          files={evidence.files} />
      </Box>
    </Flex>
  </Container>
)

export default Evidence
