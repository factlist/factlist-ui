import React from 'react'
import A from './A'
import Image from './Image'
import Content from './Content'
import Title from './Title'
import Description from './Description'
import Domain from './Domain'

const MAX_TITLE_LENGTH = 44

const Card = ({ embed }) => (
  <A href={embed.url} target="_blank">
    <Image src={embed.thumbnail_url} />

    <Content>
      {embed.title
        ? <Title>{embed.title.substr(0, MAX_TITLE_LENGTH)}</Title>
        : <Title>{embed.url}</Title>}
      <Description description={embed.description} />
      <Domain url={embed.url} />
    </Content>
  </A>
)

export default Card
