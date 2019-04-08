import React from 'react'
import { Flex, Box } from '@rebass/grid'

import Container from 'components/Topic/Container'
import Title from 'components/Topic/Title'
import Link from 'components/Topic/Link'
import Menu from 'components/Topic/Menu'
import Separator from 'components/Separator'

const Topic = ({ isEdit, topic, marginBottom }) => (
  <Box mb={marginBottom}>
    <Container>
      <Flex justifyContent='space-between'>
        <Box width={1}>
          <Title title={topic.title} isEdit={isEdit} />
        </Box>
        <Box ml={10}>
          <Menu topicId={topic.id} />
        </Box>
      </Flex>

      <Flex flexDirection='column' mt={30}>
        {!!topic.links && topic.links.map((link, index) => {
          console.log(link)
          return (
          <Box key={link.id}>
            <Link
              title={link.description}
              url={link.url}
              tags={link.tags.map((tag) => tag.title)}
              isEdit={isEdit}
            />
            {index !== topic.links.length - 1 && <Separator />}
          </Box>
        )})}
      </Flex>
    </Container>

  </Box>
)

export default Topic;

Topic.defaultProps = {
  marginBottom: '30px',
  topic: {
    id: null,
    title: 'Topic title',
    createdAt: 'created at',
    links: []
  }
};
