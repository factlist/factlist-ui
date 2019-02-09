import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TagButton = styled.button`
  display: flex;
  align-self: flex-start;
  background-color: transparent;
  border: 1px dashed #D6D6D6;
  color: #484848;
  font-size: 11px;
`;

const NewTag = ({title}) => (<TagButton >{title}</TagButton>);

NewTag.propTypes = {
  title: PropTypes.string
};
NewTag.defaultProps = {
  title: '+ Add New Tags'
};

export default NewTag;
