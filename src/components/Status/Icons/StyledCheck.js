import styled from 'styled-components'
import Check from './Check'

const StyledCheck = styled(Check)`
  width: 12px;
  fill: ${props => props.fill ? props.fill : '#00D092'};
`

export default StyledCheck
