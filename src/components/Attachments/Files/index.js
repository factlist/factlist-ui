import React from 'react'
import { Flex, Box } from 'grid-styled'
import File from './File'

const Files = ({ files }) => (
  <Flex mt={10} justify="space-between">
    {files.map(file => (
      <Box key={file.id}>
        <File src={file.file} />
      </Box>
    ))}
  </Flex>
)

export default Files
