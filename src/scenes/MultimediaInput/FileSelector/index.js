import React, { Component } from 'react'
import { Flex, Box } from 'grid-styled'
import Dropzone from './Dropzone'
import File from './File'

const ACCEPTED_FILE_TYPES = [
  'image/jpeg',
  'image/png'
]

export default class FileSelector extends Component {
  state = {
    files: [],
  }

  handleOnDrop = this.handleOnDrop.bind(this)

  handleOnDrop(files) {
    this.setState({ files })
  }

  render() {
    const { files } = this.state

    return (
      <Flex wrap={true} >
        {files.map(file => (
          <Box mr={5}>
            <File file={file} />
          </Box>
        ))}

        <Box>
          <Dropzone
            accept={ACCEPTED_FILE_TYPES.join(',')}
            onDrop={this.handleOnDrop} />
        </Box>
      </Flex>
    )
  }
}
