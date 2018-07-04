import React, { Fragment } from 'react'
import { Flex, Box } from 'grid-styled'
import _ from 'utils/_'
import DropzoneHOC from '../Dropzone'
import Dropzone from './Dropzone'
import File from './File'
import Label from '../Label'

const FileSelector = ({
  files,
  acceptedFileTypes,
  maxFilesAllowed,
  onDrop,
  onRemove,
}) => (
  <Fragment>
    <Label>Files:</Label>
    <Flex wrap={true}>
      {files.map(file => (
        <Box mr={7} key={_.randomId()}>
          <File file={file} onRemove={onRemove} />
        </Box>
      ))}

      <Box>
        {files.length < maxFilesAllowed &&
         <Dropzone
          accept={acceptedFileTypes}
          onDrop={onDrop} />}
      </Box>
    </Flex>
  </Fragment>
)

export default DropzoneHOC(FileSelector)
