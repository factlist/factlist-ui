import styled from 'styled-components'

const Button = styled.button`
  font-weight: 700;
  font-size: 12px;
  background-color: #000;
  color: #FFF;
  border: 0;
  cursor: pointer;
  user-select: none;
  padding: 0 30px;
  line-height: 40px;
  border-radius: 2px;

  width: 100%;
  outline: none;
  margin: 10px 0;

  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`

export default Button
