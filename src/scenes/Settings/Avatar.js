import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import cm from './avatar.module.css'


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
      <Dropzone
        className={cm.dropzone}
        multiple={false}
        onDrop={this.handleOnDrop}
      >
        <img
          className={cm.img}
          alt='avatar'
          src={
            selectedImage
              ? selectedImage.preview
              : src || '/images/example-avatar-2.png'
          }
        />
      </Dropzone>
    )
  }
}

export default Avatar
