import styled from 'styled-components'

const Button = styled.button`
  float: right;
  background: #000000;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #FFFFFF;

  padding: 12px 16px;

  border: 0;
  user-select: none;
  outline: none;

  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer' };
`

export default Button
