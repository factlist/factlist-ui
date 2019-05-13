import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'
import { Link } from "react-router-dom";

const commonStyles = css`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 12px;
  display: inline-block;
  padding: 12px 30px;
  user-select: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  outline: none;
  color: ${props => (props.primary ? '#FFF' : '#000')};
  background-color: ${props => (props.primary ? '#000' : '#FFF')};
  border: 1px solid ${props => (props.primary ? '#000' : '#E0E0E0')};
`;

const StyledButton = styled.button`
  ${props => commonStyles};
  ${props => props.style};
`
const StyledLink = styled(Link)`
  ${props => commonStyles};
  ${props => props.style};
  text-decoration: none;
`;

class Button extends React.Component {
  render() {
    const { primary, disabled, title, onClick, to, style, redirect, type } = this.props;
    const commonProps = { primary, disabled, style, type };
    const canRedirect = to || redirect;
    return (
      !!canRedirect ?
      <StyledLink {...commonProps} to={to}>{title}</StyledLink>
      :
      <StyledButton {...commonProps} onClick={onClick}>{title}</StyledButton>
    )
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  canRedirect: PropTypes.bool,
}
Button.defaultProps = {
  primary: true,
  disabled: false,
  canRedirect: false,
}

export default Button;
