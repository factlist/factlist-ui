import React, { Component } from 'react'
import { Flex, Box } from 'grid-styled'
import _ from 'utils/_'
import Dropzone from './Dropzone'
import File from './File'

const MAX_FILES_ALLOWED = 5
const ACCEPTED_FILE_TYPES = [
  'image/jpeg',
  'image/png'
]

export default class FileSelector extends Component {
  state = {
    files: [],
  }

  handleOnDrop = this.handleOnDrop.bind(this)
  onRemove = this.onRemove.bind(this)

  handleOnDrop(files) {
    this.setState(prevState => ({
      files: prevState.files.concat(files).slice(0, MAX_FILES_ALLOWED)
    }))
  }

  onRemove(file) {
    const files = this.state.files.filter(stateFile => stateFile !== file)

    this.setState({ files })
  }

  render() {
    const { files } = this.state

    return (
      <Flex wrap={true} >
        {files.map(file => (
          <Box mr={7} key={_.randomId()}>
            <File file={file} onRemove={this.onRemove} />
          </Box>
        ))}

        <Box>
          {
            files.length < MAX_FILES_ALLOWED &&
            <Dropzone
              accept={ACCEPTED_FILE_TYPES.join(',')}
              onDrop={this.handleOnDrop} />
          }
        </Box>
      </Flex>
    )
  }
}
