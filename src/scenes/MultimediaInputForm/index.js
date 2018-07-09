import React, { Component, Fragment } from 'react'
import MultimediaInput from 'scenes/MultimediaInput'
import Error from './Error'

// MultimediaInput for redux-form
// That's how we validate MultimediaInput
class MultimediaInputForm extends Component {
  onTextChange = this.onTextChange.bind(this)
  onFocus = this.onFocus.bind(this)

  onTextChange(text) {
    const { input: { onChange } } = this.props

    onChange(text)
  }

  onFocus() {
    const { input: { onFocus } } = this.props

    onFocus()
  }

  render() {
    const {
      id,
      placeholder,
      meta: { touched, error },
    } = this.props

    return (
      <Fragment>
        {touched && error && <Error>{error}</Error>}
        <MultimediaInput
          id={id}
          placeholder={placeholder}
          onTextChange={this.onTextChange}
          onFocus={this.onFocus} />
      </Fragment>
    )
  }
}

export default MultimediaInputForm
