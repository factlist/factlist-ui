import React, { Component } from 'react'
import StyledDropzone from './StyledDropzone'
import Img from './Img'

class Avatar extends Component {
  state = {
    selectedImage: null,
  }

  handleOnDrop = this.handleOnDrop.bind(this)

  handleOnDrop(files) {
    const image = files[0]
    this.setState({ selectedImage: image })

    const { onSelect } = this.props
    onSelect(image)
  }

  render() {
    const { src } = this.props
    const { selectedImage } = this.state

    return (
      <StyledDropzone
        multiple={false}
        onDrop={this.handleOnDrop}>
        {selectedImage
          ? <Img src={selectedImage.preview} />
          : <Img src={src ? src : '/images/example-avatar-2.png'} />}
      </StyledDropzone>
    )
  }
}

export default Avatar
