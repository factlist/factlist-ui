import React from 'react'
import { Flex, Box } from 'grid-styled'
import Card from './Card'
import _ from 'utils/_'

export default ({ embeds }) => (
  <Flex mt={10} wrap>
    <Box mr={5}>
      <Card
        domain="https://www.nytimes.com"
        thumbnail="https://static.nytimes.com/images/icons/t_logo_291_black.png"
        title="Breaking News, World News & Multimedia" />
    </Box>

    <Box>
      <Card
        domain="https://www.nytimes.com"
        thumbnail="https://static.nytimes.com/images/icons/t_logo_291_black.png"
        title="Breaking News, World News & Multimedia" />
    </Box>

    <Box mt={5}>
      <Card thumbnail="https://static.nytimes.com/images/icons/t_logo_291_black.png" />
    </Box>

    <Box mt={5}>
      <Card thumbnail="https://static.nytimes.com/images/icons/t_logo_291_black.png" />
    </Box>
  </Flex>
)


// export default ({ embeds }) => (
//   <Flex mt={10}>
//     {_.map(embeds, embed => (
//       <Box key={_.randomId()}>
//         {embed.requesting && 'Loading'}
//         {embed.data && embed.data.description}
//       </Box>
//     ))}

//     <Box mr={10}><Card /></Box>
//     <Box><Card /></Box>
//   </Flex>
// )
