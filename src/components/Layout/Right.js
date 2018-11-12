import styled from 'styled-components'
import { Box } from '@rebass/grid'

const Right = styled(Box)`
  width: 270px;
  max-width: 670px;
  margin-right: 10px;

  @media (max-width: 1010px) {
    margin-top: 20px;
    margin-right: 0;
    width: 100%;
  }
`

export default Right
