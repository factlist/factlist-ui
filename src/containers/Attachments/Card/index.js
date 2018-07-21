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
    <StyledFlex p='5px' alignItems='center' mb='5px' mr='5px'>
      <Box>
        <Img src={image} />
      </Box>
      <Box width='100%' ml='10px'>
        <Title title={title} />

        {type === 'link'
          ? <Domain url={url} />
          : <FileSize size={size} />}
      </Box>
      <Box mr='5px'>
        <Icon type={type} />
      </Box>
    </StyledFlex>
  </A>
)

export default Card
