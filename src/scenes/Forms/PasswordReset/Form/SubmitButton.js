import styled from 'styled-components'

const Button = styled.button`
  font-weight: 500;
  color: #FFF;
  font-size: 12px;
  background-color: #000;
  border: 0;
  line-height: 37px;
  padding: 0 25px;
  margin-top: 15px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`

export default Button
