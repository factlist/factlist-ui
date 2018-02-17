import styled from 'styled-components'

const Input = styled.input`
  opacity: 0;
  position: absolute;

  display: inline-block;
  vertical-align: middle;
  margin: 5px;
  cursor: pointer;

  &:checked {
    border: 1px solid #000;
  }

  &:checked + label:before {
    background: ${props => props.color};
    border-color: ${props => props.color};

    // background: #000;
    // border-color: #000;

    box-shadow: inset 0px 0px 0px 3px #FFF;
  }

  &:checked + label {
    // color: ${props => props.color};
  }
`

export default Input
