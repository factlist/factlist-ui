import React, { Component, Fragment } from 'react'
import MultimediaInput from 'scenes/MultimediaInput'
import Error from './Error'

// MultimediaInput with ReduxForm
class MultimediaInputForm extends Component {
  onTextChange = this.onTextChange.bind(this)

  onTextChange(text) {
    const { input: { onChange } } = this.props

    onChange(text)
  }

  render() {
    const {
      meta: { touched, error },
      placeholder,
    } = this.props

    return (
      <Fragment>
        {touched && error && <Error>{error}</Error>}
        <MultimediaInput
          ref={node => this.multimediaInput = node}
          placeholder={placeholder}
          onTextChange={this.onTextChange} />
      </Fragment>
    )
  }
}

export default MultimediaInputForm
