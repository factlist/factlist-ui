import styled from 'styled-components'

const Choice = styled.label`
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 13px;
  cursor: pointer;
  line-height: 30px;
  text-align: center;
  padding: 0 20px;
  border-right: 1px solid #D8D8D8;
  user-select: none;

  background-color: ${props => props.active ? props.color : '#FFF'};
  color: ${props => props.active ? '#FFF' : '#000'};

  &:last-child {
    border-right: 0;
  }
`

export default Choice
