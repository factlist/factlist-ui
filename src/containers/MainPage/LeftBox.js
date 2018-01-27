import styled from 'styled-components'
import { Box } from 'grid-styled'

const LeftBox = styled(Box)`
  width: 165px;
  margin-left: 10px;
  word-wrap: break-word;

  @media (max-width: 1185px) {
    display: none;
  }
`

export default LeftBox
