import React, { Component } from 'react'
import Container from './Container'
import { Flex, Box } from 'grid-styled'
import _ from 'utils/_'
import Dropzone from './Dropzone'
import File from './File'
import Label from '../Label'

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
  open = this.open.bind(this)
  reset = this.reset.bind(this)

  handleOnDrop(files) {
    const { onChange } = this.props

    this.setState(
      prevState => ({
        files: prevState.files.concat(files).slice(0, MAX_FILES_ALLOWED)
      }),
      () => onChange(this.state.files)
    )
  }

  onRemove(file) {
    const { onChange } = this.props
    const files = this.state.files.filter(stateFile => stateFile !== file)

    this.setState({ files })

    onChange(files)
  }

  open() {
    this.dropzone.open()
  }

  reset() {
    const { onChange } = this.props

    this.setState({ files: [] })
    onChange([])
  }

  render() {
    const { show } = this.props
    const { files } = this.state

    return (
      <Container show={show}>
        <Label>Attachments:</Label>
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
                innerRef={node => this.dropzone = node}
                accept={ACCEPTED_FILE_TYPES.join(',')}
                onDrop={this.handleOnDrop} />
            }
          </Box>
        </Flex>
      </Container>
    )
  }
}
