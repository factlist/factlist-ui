import React from 'react'
import Claim from '../../components/Claim'
import { Flex } from 'grid-styled'
import Topics from '../../components/Topics'
import Footer from '../../components/Footer'
import LeftBox from './LeftBox'
import CenterBox from './CenterBox'
import RightBox from './RightBox'

const links = [
  { title: "#JusticeForTrabzonspor" },
  { title: "Hayırlı Cumalar" },
  { title: "Ali Tekintüre" },
  { title: "Esenyurt Belediye Başkanı" },
  { title: "YeniDünyaİçin" },
  { title: "YananAlanlarYeşilleniyor" },
  { title: "İnfantino" },
  { title: "Eylül" },
  { title: "HDP'li Sancar" }
]

const MainPage = () => (
  <Flex justify="center" wrap mt={50}>
    <LeftBox ml={10}>
      <Topics title="POPULAR TOPICS" links={links} />
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
