import React from 'react'
import { Flex, Box } from '@rebass/grid'
import Topic from 'containers/Topic'

export default ({ topics }) => (
  <Flex flexDirection="column">
    {topics.map(topic =>
      <Box key={topic.id} mb='30px'>
        <Topic key={topic.id} topic={topic} />
      </Box>
    )}
  </Flex>
)
