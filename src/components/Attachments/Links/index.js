import React from 'react'
import { Flex, Box } from 'grid-styled'
import Card from './Card'

const Links = ({ links }) => {
  // API may return links with no embeds.
  // So, we need to filter links which has embeds.
  const filteredLinks = links.filter(link => link.embed !== null)

  return (
    <Flex>
      {filteredLinks.map(({ link, embed }, index) => (
        <Box
          key={link}
          mr={(index + 1) % 2 === 0 ? 0 : 10}
          width={1/2}>
          <Card embed={embed} />
        </Box>
      ))}
    </Flex>
  )
}

export default Links
