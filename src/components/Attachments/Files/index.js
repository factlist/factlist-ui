import React from 'react'
import { Flex, Box } from 'grid-styled'
import File from './File'

const Files = ({ files }) => (
  <Flex mt={10}>
    {files.map((file, index) => (
      <Box
        key={file.id}
        width={1/5}
        mr={(index + 1) % 5 === 0 ? 0 : 5}>
        <File src={file.file} />
      </Box>
    ))}
  </Flex>
)

export default Files
