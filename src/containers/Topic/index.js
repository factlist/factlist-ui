import React from 'react'
import { withState } from 'recompose'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Container from './Container'
import Title from './Title'
import TitleInput from './TitleInput'
import Menu from './Menu'
import Link from './Link'
import AddIcon from './AddIcon'

const enhance = withState('isEdit', 'setIsEdit', false)

const Topic = ({ isEdit, setIsEdit, topic }) => (
  <Container>
    <Flex justifyContent='space-between'>
      <Box width={1}>
        {
          isEdit ? <TitleInput value={topic.title} /> : <Title title={topic.title} />
        }
      </Box>
      <Box ml={10}>
        <Menu setIsEdit={setIsEdit} />
      </Box>
    </Flex>

    <Flex flexDirection='column' mt={30}>
      {topic.links.map(link => (
        <Box key={link.id}>
          <Link title={link.embed.title} url={link.link} tags={link.tags} editable={isEdit} />
        </Box>
      ))}
    </Flex>

    <StyledFlex>
      <AddIconContainer>
        <AddIcon />
      </AddIconContainer>
      <StyledText>Add a link to your topic</StyledText>
    </StyledFlex>

  </Container>
)

export default enhance(Topic)

const StyledText = styled.p`
  color: #2C8D16;
  font-size: 14px;
  margin: 0px;
  &.hovered {
    cursor: pointer;
  }
`
const AddIconContainer = styled.div`
  position: absolute;
  left: -20px;
  bottom: 0px;
`
const StyledFlex = styled(Flex)`
  position: relative;
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
`