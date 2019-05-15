import React from 'react'
import { Flex, Box } from '@rebass/grid'
import {Separator} from 'components'
import Title from './Title'
import Link from './Link'
import Menu from './Menu'
import cm from './topic.module.css'


const Topic = ({ isEdit, topic, marginBottom }) =>
  <Box mb={marginBottom}>
    <div className={cm.container}>
      <Flex justifyContent='space-between'>
        <Box width={1}>
          <Title title={topic.title} isEdit={isEdit} />
        </Box>
        <Box ml={10}>
          <Menu topicId={topic.id} />
        </Box>
      </Flex>

      <Flex flexDirection='column'>
        {!!topic.links && topic.links.map((link, index) => {
          return (
          <Box key={link.id}>
            <Link
              title={link.title}
              url={link.url}
              tags={link.tags}
              isEdit={isEdit}
            />
            {index !== topic.links.length - 1 && <Separator />}
          </Box>
        )})}
      </Flex>
    </div>
  </Box>

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
