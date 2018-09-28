import React from 'react'
import Link from 'components/Link'
import Container from './Container'
import Title from './Title'
import Author from './Author'
import Separator from './Separator'
// import SearchInput from './SearchInput'
import Filter from './Filter'
import { Flex, Box } from 'grid-styled'
import Timeago from 'components/Timeago'
import Avatar from 'containers/Evidence/Avatar'
import Profile from 'containers/Evidence/Profile'
import FullName from 'containers/Evidence/FullName'
import Username from 'containers/Evidence/Username'

const Topic = ({ title, author, links }) => (
  <Container>

    <Flex mb='15px'>
      <Box>
        <Title>{title}</Title>
      </Box>
      <Box ml="auto">
        <Filter />
      </Box>
    </Flex>
    
    {links.map(link => (
      <div>
        <Link
          url={link.url}
          title={link.title}
          tags={link.tags} />

        <Separator />
      </div>
    ))}

    <Flex alignItems="center">
      <Box>
        
          <Avatar src='http://placehold.it/300x300' />
          <Profile>
            <FullName>Şerafettin Yarar</FullName>
            <Username>serafettin</Username>
          </Profile>
        
      </Box>
      <Box ml="auto">
        <Timeago date='2018-06-06 00:00:00' />
      </Box>
    </Flex>

  </Container>
)

export default Topic
