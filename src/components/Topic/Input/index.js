import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  color: #000;
  font-size: 24px;
  margin: 0px;
  padding-left: 20px;
  border: 0;
  font-family: 'Roboto',sans-serif;
  font-weight: 500;
  line-height: 32px;
  &:placeholder {
    opacity: 0.3;
  };
  &:focus {
    outline: none !important
  };
  &.hovered {
    cursor: pointer;
  };
`;

const Input = ({ input, placeholder, name, type, id }) => {
  return (
    <StyledInput
      {...input}
      name={name}
      type={type}
      placeholder={placeholder}
      id={id}
    />
  );
};

export default Input;
