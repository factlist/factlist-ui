import styled from 'styled-components'
import { Box } from 'grid-styled'

const CenterBox = styled(Box)`
  margin: 0 30px;

  @media (max-width: 730px) {
    margin: 0;
  }
`

export default CenterBox
