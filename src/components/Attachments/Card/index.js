import React from 'react'
import { Box } from 'grid-styled'
import _ from 'utils/_'
import StyledFlex from './StyledFlex'
import Img from './Img'
import Title from './Title'
import Domain from './Domain'
import FileSize from './FileSize'
import LinkIcon from './Icons/Link'
import ExpandIcon from './Icons/Expand'

const MAX_TITLE_CHAR = 28

const getHostname = (url) => {
  const matches = _.parseUrl(url)
  const hostname = matches.hostname

  return hostname.replace('www.', '')
}

const Card = ({ type, title, url = null, size = null, image }) => (
  <StyledFlex ml={10} mb={10} px={5} py={5} align="center">
    <Box>
      <Img src={image} />
    </Box>
    <Box width={1} ml={10}>
      <Title>
        {title.substr(0, MAX_TITLE_CHAR)}
        {title.length > MAX_TITLE_CHAR && '...'}
      </Title>

      {type === 'link'
        ? <Domain>{getHostname(url)}</Domain>
        : <FileSize size={size} />}
    </Box>
    <Box mr={5}>
      {type === 'link'
      ? <LinkIcon style={{ marginTop: '-2px' }} />
      : <ExpandIcon />}

    </Box>
  </StyledFlex>
)

export default Card
