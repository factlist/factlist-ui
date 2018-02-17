import React from 'react'
import { Flex, Box } from 'grid-styled'
import Container from './Container'
import Textarea from './Textarea'
import Button from './Button'
import Label from './Label'
import MediaButton from './MediaButton'
import Status from './Status'

const EvidenceForm = () => (
  <Container>
    <form>
      <Flex column>
        <Box mb={30}>
          <Label>This report is:</Label>
          <Status />
        </Box>
        <Box mb={15}>
          <Label>Because:</Label>
          <Textarea placeholder="Description or URL" />
        </Box>
        <Box mb={20}>
          <MediaButton />
        </Box>
        <Box>
          <Button>ADD EVIDENCE</Button>
        </Box>
      </Flex>
    </form>
  </Container>
)

export default EvidenceForm
