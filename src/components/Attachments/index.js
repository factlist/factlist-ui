import React from 'react'
import { Flex, Box } from 'grid-styled'
import Card from './Card'

const Attachments = ({ links, files }) => (
  <Flex wrap={true} ml={-10} width={0.9}>
    {links.map(link => link.embed && (
      <Box
        width={1/2}
        key={link.embed.url}>
        <Card
          type='link'
          url={link.embed.url}
          title={link.embed.title}
          image={link.embed.thumbnail_url} />
      </Box>
    ))}

    {files.map(file => file.image && (
      <Box
        width={1/2}
        key={file.id}>
        <Card
          type='image'
          title={file.name}
          size={file.size}
          image={file.image} />
      </Box>
    ))}

  </Flex>
)

export default Attachments
