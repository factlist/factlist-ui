import React, { Fragment } from 'react'
import { Flex, Box } from '@rebass/grid'
import _ from 'utils/_'
import Card from './Card'
import EmptyCard from './EmptyCard'
import RemoveButton from '../RemoveButton'

const EmbedPreview = ({ embeds, onRemove }) => (
  <Flex flexWrap="wrap" justifyContent="space-between">
    {embeds.map(embed => (
      <Box
        key={_.randomId()}
        width={1 / 3.1}
        mb='8px'
        style={{ position: 'relative' }}>
        {embed.requesting && <EmptyCard />}

        {!embed.requesting &&
          <Fragment>
            <Card
              title={embed.data.title}
              image={embed.data.thumbnail_url}
              url={embed.data.url} />

            <RemoveButton onClick={() => onRemove(embed)} />
          </Fragment>
        }
      </Box>
    ))}

    {embeds.length % 3 !== 0 && <Box width={1 / 3.1} />}
  </Flex>
)

export default EmbedPreview
