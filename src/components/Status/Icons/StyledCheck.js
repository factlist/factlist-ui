import styled from 'styled-components'
import Check from './Check'
import colors from 'core/colors'

const StyledCheck = styled(Check)`
  width: 14px;
  fill: ${props => props.fill ? props.fill : colors.conclusions['true']};
`

export default StyledCheck
