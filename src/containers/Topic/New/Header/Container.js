import styled from 'styled-components'
import { Flex } from '@rebass/grid'

const Container = styled(Flex)`
  background-color: #FFF;
  padding: 15px 0;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  min-width: 375px;
  max-width: 670px;
  justify-content: flex-end;

  @media (max-width: 730px) {
    padding: 20px 0;
    background-color: #F1F3F5;
    margin: 0;
  }
`

export default Container
