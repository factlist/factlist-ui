import React from 'react'
import { Flex, Box } from 'grid-styled'
import Container from './Container'
import Status from './../Status'
import Title from './Title'
import Img from './Img'
import Timeago from '../../containers/Timeago'

const Claim = ({ claim }) => (
  <Container>
    <Flex justify="space-between" align="center">
      <Box>
        <Status trueCount={1} falseCount={1} inConclusiveCount={0} />
      </Box>
      <Box>
        <Timeago date={claim.created_at} />
      </Box>
    </Flex>

    <Flex column mt={20}>
      <Box>
        <Title>{claim.text}</Title>
      </Box>
      <Box>
        {claim.files && claim.files.map(file =>
          <Img key={'claim_file_' + file.id}src={file.source} />
        )}
      </Box>
    </Flex>
  </Container>
)

export default Claim
