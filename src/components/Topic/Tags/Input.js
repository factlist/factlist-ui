import styled from 'styled-components';

const Input = styled.input`
  width: 120px;
  border: 1px solid #ddd;

  padding: 2px 6px;
  margin: 6px 6px 0px 0px;
  background-color: rgba(0,0,0,0.08);
  color: rgba(0,0,0,0.85);
  font-size: 13px;
  border-radius:3px;


  &:focus{
    outline: none;
  }
`;

export default Input;
