import React from 'react'
import A from './A'
import Image from './Image'
import Content from './Content'
import Title from './Title'
import Domain from './Domain'

const MAX_TITLE_LENGTH = 44

const Card = ({ url, image, title }) => (
  <A href={url} target="_blank">
    <Image src={image} />

    <Content>
      {title
        ? <Title>{title.substr(0, MAX_TITLE_LENGTH)}</Title>
        : <Title>{url}</Title>}
      <Domain url={url} />
    </Content>
  </A>
)

export default Card
