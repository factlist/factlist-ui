import React, { Component } from 'react'
import File from './File'
import { Flex, Box } from 'grid-styled'
import _ from 'utils/_'

class FilePreview extends Component {
  render() {
    const { files, onRemove } = this.props

    return (
      <Flex justify="flex-start">
        {files.map(file => (
          <Box mr={5} key={_.randomId()}>
            <File file={file} onRemove={onRemove} />
          </Box>
        ))}
      </Flex>
    )
  }
}

export default FilePreview
