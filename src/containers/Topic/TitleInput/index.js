import React, { Component } from 'react';
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';


const StyledTextarea = styled(Textarea)`
  font-family: 'Roboto',sans-serif;
  font-weight: 500;
  font-size: 24px;

  margin: 0;
  padding: 0;
  width: 100%;
  border: 0;

  color: ${props => props.color};
  line-height: 32px;
  resize: none;
`;

class TitleInput extends Component {
  state = {
    color:'#00000030',
    value: this.props.value
  };

  onChange = this.onChange.bind(this);

  onChange(event) {
    this.setState({
      color:'#000',
      value:event.target.value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <StyledTextarea
        color={this.state.color}
        value={value}
        onInput={this.onChange}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
      />
    );
  }
}

export default TitleInput;
