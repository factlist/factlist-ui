import React from 'react'
import { Flex, Box } from 'grid-styled'
import _ from 'utils/_'
import UploadButton from './UploadButton'
import File from './File'
import Dropzone from '../Dropzone'

const FileSelector = ({
  maxFileAllowed,
  files,
  onDrop,
  onRemove,
}) => {
  return (
    <Flex wrap={true}>
      {files.map(file => (
        <Box mr={7} key={_.randomId()}>
          <File file={file} onRemove={onRemove} />
        </Box>
      ))}

      <Box>
        {files.length < maxFileAllowed &&
        <Dropzone onDrop={onDrop}>
          <UploadButton />
        </Dropzone>}
      </Box>
    </Flex>
  )
}

export default FileSelector
