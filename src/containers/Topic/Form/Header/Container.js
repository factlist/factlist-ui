import styled from 'styled-components'
import { Flex } from '@rebass/grid'

const Container = styled(Flex)`
  background-color: #FFF;
  border-bottom: 1px solid #DDDDDD;
  padding: 15px 0;
  margin: 0px auto 30px auto;

  @media (max-width: 730px) {
    padding: 20px 0;
    background-color: #F1F3F5;
    margin: 0;
  }
`

export default Container