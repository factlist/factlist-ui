import styled from 'styled-components'
import Question from './Question'
import colors from 'core/colors'

const StyledQuestion = styled(Question)`
  width: 14px;
  fill: ${colors.conclusions['inconclusive']};
`

export default StyledQuestion
