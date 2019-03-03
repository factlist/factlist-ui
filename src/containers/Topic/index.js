import React from 'react'
import { withState } from 'recompose'
import { Flex, Box } from '@rebass/grid'
import Container from './Container'
import Title from './Title'
import TitleInput from './TitleInput'
import Menu from './Menu'
import Link from './Link'
import Separator from 'components/Separator'

const enhance = withState('isEdit', 'setIsEdit', false)

const Topic = ({ isEdit, setIsEdit, topic, marginBottom }) => (
  <Box mb={marginBottom}>
    <Container>

      <Flex justifyContent='space-between'>
        <Box width={1}>
          {
            isEdit ? <TitleInput value={topic.title} /> : <Title title={topic.title} />
          }
        </Box>
        <Box ml={10}>
          <Menu setIsEdit={setIsEdit} topicId={topic.id} />
        </Box>
      </Flex>

      <Flex flexDirection='column' mt={30}>
        {!!topic.links && topic.links.map((link, index) => {
          return (
          <Box key={link.id}>
            <Link
              title={link.description}
              url={link.url}
              tags={link.tags}
              editable={false}
              handleRemoveTag={() => alert('remove tag clicked')}
              onSaveTag={() => console('saved tag')}
            />
            {index !== topic.links.length - 1 && <Separator />}
          </Box>
        )})}
      </Flex>
    </Container>

  </Box>
)

export default enhance(Topic)

Topic.defaultProps = {
  marginBottom: '30px',
  topic: {
    id: null,
    title: 'Topic title',
    createdAt: 'created at',
    links: []
  }
};
