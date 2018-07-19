import React from 'react'
import { Box } from 'grid-styled'
import A from './A'
import StyledFlex from './StyledFlex'
import Img from './Img'
import Title from './Title'
import Domain from './Domain'
import FileSize from './FileSize'
import Icon from './Icon'

const Card = ({
  type,
  title,
  url = null,
  size = null,
  image,
  ...props,
}) => (
  <A {...props}>
    <StyledFlex ml={10} mb={10} px={5} py={5} align='center'>
      <Box>
        <Img src={image} />
      </Box>
      <Box width={1} ml={10}>
        <Title title={title} />

        {type === 'link'
          ? <Domain url={url} />
          : <FileSize size={size} />}
      </Box>
      <Box mr={5}>
        <Icon type={type} />
      </Box>
    </StyledFlex>
  </A>
)

export default Card
