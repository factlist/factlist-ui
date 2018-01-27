import styled from 'styled-components'
import Icon from './Icon'

const StyledIcon = styled(Icon)`
  margin-top: 2px;
  cursor: pointer;
  display: none;

  @media (max-width: 730px) {
    display: block;
  }
`

export default StyledIcon
