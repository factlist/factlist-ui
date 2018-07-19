import React from 'react'
import { Flex } from 'grid-styled'
import Links from './Links'
import Files from './Files'

const Attachments = ({ links, files }) => (
  <Flex wrap={true} ml={-10} width={0.9}>
    <Links links={links} />

    <Files files={files} />
  </Flex>
)

export default Attachments
