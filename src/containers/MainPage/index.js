import React from 'react'
import Claim from '../../components/Claim'
import { Flex, Box } from 'grid-styled'
import Topics from '../../components/Topics'
import Footer from '../../components/Footer'
import LeftBox from './LeftBox'
import CenterBox from './CenterBox'
import RightBox from './RightBox'
import Evidence from '../../components/Evidence'
import EvidenceForm from '../../components/EvidenceForm'
import Slack from '../../components/Slack'

const MainPage = () => (
  <Flex justify="center" wrap>
    <LeftBox>
      <Topics title="POPULAR TOPICS" />
    </LeftBox>

    <CenterBox>
      <Box mb={30}>
        <Claim />
        <Evidence />
        <Evidence />
      </Box>

      <Box mb={30} >
        <Claim />
      </Box>

      <Box mb={30}>
        <Claim />
      </Box>

      <Box mg={30}>
        <EvidenceForm />
      </Box>
    </CenterBox>

    <RightBox>
      <Box>
        <Slack />
      </Box>
      <Box mt={15}>
        <Footer />
      </Box>
    </RightBox>
  </Flex>
)

export default MainPage
