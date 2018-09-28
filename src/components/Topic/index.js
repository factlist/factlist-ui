import React from 'react'
import Container from './Container'
import Title from './Title'
import Separator from './Separator'
// import SearchInput from './SearchInput'
import Filter from './Filter'
import { Flex, Box } from 'grid-styled'
import Timeago from 'components/Timeago'
import Avatar from 'containers/Evidence/Avatar'
import Profile from 'containers/Evidence/Profile'
import FullName from 'containers/Evidence/FullName'
import Username from 'containers/Evidence/Username'
import Link from 'components/Link'

const Topic = ({ topic }) => (
  <Container>

    <Flex mb='15px'>
      <Box>
        <Title>{topic.title}</Title>
      </Box>
      <Box ml="auto">
        <Filter />
      </Box>
    </Flex>

    {topic.links.length === 0 && <p>
      There are no links to show.
    </p>}

    {topic.links.map(link => (
      <div key={link.id}>
        <Link
          link={link.link}
          title={link.embed.title}
          tags={link.tags} />
        <Separator />
      </div>
    ))}

    <Flex alignItems="center">
      <Box>

          <Avatar src='http://placehold.it/300x300' />
          <Profile>
            <FullName>{topic.user.name}</FullName>
            <Username>{topic.user.username}</Username>
          </Profile>

      </Box>
      <Box ml="auto">
        <Timeago date={topic.created_at} />
      </Box>
    </Flex>

  </Container>
)

export default Topic
