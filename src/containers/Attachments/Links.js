import React, { Fragment } from 'react'
import { Box } from '@rebass/grid'
import Card from './Card'

const Links = ({ links, onClick }) => (
  <Fragment>
    {links.map(link => link.embed && (
      <Box
        width={1 / 2}
        key={link.embed.url}>
        <Card
          type='link'
          url={link.embed.url}
          title={link.embed.title}
          image={link.embed.thumbnail_url}
          target='_blank'
          href={link.embed.url} />
      </Box>
    ))}
  </Fragment>
)

export default Links
