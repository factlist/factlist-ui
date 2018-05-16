import React from 'react'
import { Flex, Box } from 'grid-styled'
import _ from 'utils/_'
import Card from './Card'
import EmptyCard from './EmptyCard'
import RemoveButton from '../RemoveButton'

const EmbedPreview = ({ embeds, onRemove }) => (
  <Flex justify="space-between" wrap={true}>
    {embeds.map(embed => (
      <Box
        key={_.randomId()}
        width={1/3.1}
        mb={8}
        style={{ position: 'relative' }}>
          {embed.requesting && <EmptyCard />}

          {!embed.requesting && <Card
            title={embed.data.title}
            image={embed.data.thumbnail_url}
            url={embed.data.url} />}

        <RemoveButton onClick={() => onRemove(embed)} />
      </Box>
    ))}

    {embeds.length % 3 !== 0 && <Box width={1/3.1}/>}
  </Flex>
)

export default EmbedPreview
