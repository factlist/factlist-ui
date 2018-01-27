import React from 'react'
import Claim from '../../components/Claim'
import { Flex } from 'grid-styled'
import Topics from '../../components/Topics'
import Footer from '../../components/Footer'
import LeftBox from './LeftBox'
import CenterBox from './CenterBox'
import RightBox from './RightBox'


const MainPage = () => (
  <Flex justify="center" wrap>
    <LeftBox>
      <Topics title="POPULAR TOPICS" />
    </LeftBox>

    <CenterBox>
      <Claim />
    </CenterBox>

    <RightBox>
      <Footer />
    </RightBox>
  </Flex>
)

export default MainPage
