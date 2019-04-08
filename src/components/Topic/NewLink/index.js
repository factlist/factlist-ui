import React from 'react';
import styled from 'styled-components';

import StyledFlex from './StyledFlex';
import AddIconContainer from './AddIconContainer';
import AddIcon from './AddIcon';

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

const NewLink = (props) => {
  const { placeholder, name, type, id } = props;

  return (
    <StyledFlex>
      <AddIconContainer>
        <AddIcon />
      </AddIconContainer>
      <StyledInput
        name={name}
        type={type}
        placeholder={placeholder}
        id={id}
        {...props}
      />
    </StyledFlex>
  );
};

export default NewLink;
