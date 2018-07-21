import styled, { css } from 'styled-components'

const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 12px;

  display: inline-block;
  padding: 12px 30px;

  user-select: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer' };
  outline: none;

  ${props => props.primary && css`
    color: #FFF;
    background-color: #000;
    border: 1px solid #000;
  `}

  ${props => props.light && css`
    background-color: #FFF;
    border: 1px solid #E0E0E0;
    color: #000;
  `}
`

Button.defaultProps = {
  primary: true,
  disabled: false,
}

export default Button
