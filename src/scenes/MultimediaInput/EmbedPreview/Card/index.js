import React from 'react'
import A from './A'
import Image from './Image'
import Content from './Content'
import Title from './Title'
import Domain from './Domain'

const Card = ({ url, image, title }) => (
  <A href={url} target="_blank">
    <Image src={image} />

    <Content>
      <Title title={title} />
      <Domain url={url} />
    </Content>
  </A>
)

export default Card
