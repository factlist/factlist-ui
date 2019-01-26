import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import AddIcon from './AddIcon';

const NewLink = () => {
  return (
    <StyledFlex>
      <AddIconContainer>
        <AddIcon />
      </AddIconContainer>
      <StyledText>Add a link to your topic</StyledText>
    </StyledFlex>
  )
}

const StyledText = styled.p`
  color: #2C8D16;
  font-size: 14px;
  margin: 0px;
  &.hovered {
    cursor: pointer;
  }
`
const AddIconContainer = styled.div`
  position: absolute;
  left: -20px;
  bottom: 0px;
`
const StyledFlex = styled(Flex)`
  position: relative;
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
`

export default NewLink;
