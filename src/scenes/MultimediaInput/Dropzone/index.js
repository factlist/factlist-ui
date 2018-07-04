import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fileUpload, removeFile } from 'modules/file/actions'

const MAX_FILES_ALLOWED = 5
const ACCEPTED_FILE_TYPES = [
  'image/jpeg',
  'image/png'
].join(',')

export default (WrappedComponent) => {
  class Dropzone extends Component {
    onDrop = this.onDrop.bind(this)
    onRemove = this.onRemove.bind(this)

    onDrop(selectedFiles) {
      const { upload, files } = this.props

      selectedFiles
        .slice(0, MAX_FILES_ALLOWED - files.length)
        .forEach(file => upload(file))
    }

    onRemove(file) {
      const { remove } = this.props

      remove(file)
    }

    render() {
      return <WrappedComponent
        maxFilesAllowed={MAX_FILES_ALLOWED}
        acceptedFileTypes={ACCEPTED_FILE_TYPES}
        onDrop={this.onDrop}
        onRemove={this.onRemove}
        {...this.props} />
    }
  }

  const mapStateToProps = (state) => ({
    files: state.file.all,
  })

  const mapDispatchToProps = (dispatch) => ({
    upload: (file) => dispatch(fileUpload(file)),
    remove: (file) => dispatch(removeFile(file)),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Dropzone)
}
