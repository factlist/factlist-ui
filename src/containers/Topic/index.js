import React from 'react'
import { Flex, Box } from '@rebass/grid'
import Container from './Container'
import Title from './Title'
import Menu from './Menu'
import Link from './Link'

const Topic = ({ topic }) => (
  <Container>
    <Flex justifyContent='space-between'>
      <Box width={1}>
        <Title title={topic.title} />
      </Box>
      <Box ml={10}>
        <Menu />
      </Box>
    </Flex>

    <Flex flexDirection='column' mt={30}>
      {topic.links.map(link => (
        <Box key={link.id}>
          <Link title={link.embed.title} url={link.link} tags={link.tags} />
        </Box>
      ))}
    </Flex>
  </Container>
)

export default Topic
