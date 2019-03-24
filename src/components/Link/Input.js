import styled from 'styled-components';

const Input = styled.input`
  color: #2C8D16;
  font-size: 14px;
  margin: 0px;
  border: 0;
  width: 100%;
  &:focus {
    outline: none !important
  };
  &.hovered {
    cursor: pointer;
  };
`
export default Input;
