import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import AddIcon from './AddIcon';

class NewLink extends React.Component {
  render() {
    const { url, onSave, onChange } = this.props;
    return (
      <StyledFlex>
        <AddIconContainer>
          <AddIcon />
        </AddIconContainer>
        <Input
          value={url}
          placeholder="Add a link to your topic"
          onBlur={() => onSave()}
          onChange={onChange}
          onKeyPress={(e) => e.key === 'Enter' && onSave()}
        />
      </StyledFlex>
    )
  }
}

NewLink.propTypes = {
  onSave: PropTypes.func
};

const Input = styled.input`
  color: #2C8D16;
  font-size: 14px;
  margin: 0px;
  border: 0;
  &:focus {
    outline: none !important
  };
  &.hovered {
    cursor: pointer;
  };
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
