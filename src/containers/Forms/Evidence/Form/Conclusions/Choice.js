import styled from 'styled-components'
import colors from 'core/colors'

const Choice = styled.label`
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  cursor: pointer;
  line-height: 25px;
  text-align: center;
  padding: 0 18px;
  border-right: 1px solid #D8D8D8;
  user-select: none;

  background-color: ${props => props.active ? colors.conclusions[props.color] : '#FFF'};
  color: ${props => props.active ? '#FFF' : '#000'};

  &:last-child {
    border-right: 0;
  }
`

export default Choice
