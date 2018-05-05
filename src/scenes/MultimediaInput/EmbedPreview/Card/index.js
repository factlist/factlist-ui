import React from 'react'
import Container from './Container'
import Thumbnail from './Thumbnail'
import Content from './Content'
import Text from './Text'
import Title from './Title'
import Domain from './Domain'

// @TODO Domain prettify

const Card = ({
  domain = null,
  thumbnail,
  title,
  text = `Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.`
}) => (
  <Container>
    <Thumbnail src={thumbnail} />

    <Content>
      <Title>{title}</Title>
      {/* <Text>{text.length > 50 ? text.substr(0, 50) + '...' : text}</Text> */}
      {domain && <Domain domain={domain} />}
    </Content>
  </Container>
)

export default Card
