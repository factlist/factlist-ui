import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
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
