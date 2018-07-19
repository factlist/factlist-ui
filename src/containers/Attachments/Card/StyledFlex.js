import { Flex } from 'grid-styled'
import styled from 'styled-components'

const Container = styled(Flex)`
  background-color: #f9f9f9;
  border: 1px solid #f1eded;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    border: 1px solid #d4d3d3;
  }
`

export default Container
