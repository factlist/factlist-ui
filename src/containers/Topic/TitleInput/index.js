import React, { Component } from 'react'
import styled from 'styled-components'
import Textarea from 'react-textarea-autosize'

const StyledTextarea = styled(Textarea)`
  font-family: 'Roboto',sans-serif;
  font-weight: 500;
  font-size: 24px;

  margin: 0;
  padding: 0;
  width: 100%;
  border: 0;

  color: #000;
  line-height: 32px;
  resize: none;
`

class TitleInput extends Component {

    state = {
        defaultValue: this.props.value,
        value: this.props.value,
    }

    onChange = this.onChange.bind(this)
    onBlur = this.onBlur.bind(this)

    onChange(event) {
        this.setState({
            value: event.target.value.replace(/\n|\r/g, '')
        })
    }

    onBlur() {
        const { defaultValue, value } = this.state

        if (defaultValue !== value) {
            console.log('Saving...')
        }
    }

    render() {
        const { value } = this.state

        return <StyledTextarea
            value={value}
            onInput={this.onChange}
            onBlur={this.onBlur} />
    }
}

export default TitleInput
