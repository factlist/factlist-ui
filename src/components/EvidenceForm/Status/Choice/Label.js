import styled from 'styled-components'

const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #000;

  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    background: #FFF;
    border: 2px solid #DDD;
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 50%;
  }

  user-select: none;
`

export default Label
