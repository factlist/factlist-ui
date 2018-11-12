import React from 'react'
import { Flex } from '@rebass/grid'
import Links from './Links'
import Files from './Files'

const Attachments = ({ links, files }) => (
  <Flex flexWrap="wrap" width={0.9}>
    <Links links={links} />

    <Files files={files} />
  </Flex>
)

export default Attachments
