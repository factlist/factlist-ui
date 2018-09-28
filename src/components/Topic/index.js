import React from 'react'
import Link from 'components/Link'
import Container from './Container'
import Title from './Title'
import Separator from './Separator'
// import SearchInput from './SearchInput'
import Filter from './Filter'
import { Flex, Box } from 'grid-styled'

const Topic = ({ title, links }) => (
  <Container>

    <Flex alignItems="center" mb='15px'>
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
  </Container>
)

export default Topic
