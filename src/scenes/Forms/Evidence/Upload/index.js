import React, { Component } from 'react'
import Icon from './Icon'
import Span from './Span'
import StyledDropzone from './StyledDropzone'

class Upload extends Component {
  handleOnDrop = this.handleOnDrop.bind(this)

  acceptedFiles = [
    'image/jpeg',
    'image/png'
  ]

  handleOnDrop(files) {
    const { onSelect } = this.props

    onSelect(files)
  }

  render() {
    return (
      <StyledDropzone
        accept={this.acceptedFiles.join(',')}
        onDrop={this.handleOnDrop}
      >
        <Icon />
        <Span>Add photo or video</Span>
      </StyledDropzone>
    )
  }
}

export default Upload
