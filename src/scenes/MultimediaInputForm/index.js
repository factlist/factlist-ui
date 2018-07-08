import React, { Component, Fragment } from 'react'
import MultimediaInput from 'scenes/MultimediaInput'
import Error from './Error'

// MultimediaInput for redux-form
// That's how we validate MultimediaInput
class MultimediaInputForm extends Component {
  onTextChange = this.onTextChange.bind(this)

  onTextChange(text) {
    const { input: { onChange } } = this.props

    onChange(text)
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
          onTextChange={this.onTextChange} />
      </Fragment>
    )
  }
}

export default MultimediaInputForm
