import styled from 'styled-components'
import { Box } from '@rebass/grid'

const LeftBox = styled(Box)`
  word-wrap: break-word;
  @media (max-width: 960px) {
    display:none;
  }
`

export default LeftBox
