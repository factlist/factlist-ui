import React, { Component } from 'react'
import propTypes from 'prop-types'
import StyledDropzone from './StyledDropzone'

const ACCEPTED_FILE_TYPES = [
  'image/jpeg',
  'image/png'
].join(',')

class Dropzone extends Component {
  onDrop = this.onDrop.bind(this)

  static propTypes = {
    onDrop: propTypes.func.isRequired,
  }

  onDrop(files) {
    const { onDrop } = this.props

    onDrop(files)
  }

  render() {
    const { children } = this.props

    return (
      <StyledDropzone
        accept={ACCEPTED_FILE_TYPES}
        onDrop={this.onDrop}>
        {children}
      </StyledDropzone>
    )
  }
}

export default Dropzone
