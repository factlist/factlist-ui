import React from 'react'
import A from '../Card/A'
import Image from './Image'
import Content from '../Card/Content'
import Line from './Line'

const EmptyCard = () => (
  <A>
    <Image />

    <Content>
      <Line width={100} mt={1} animation="0.75s linear infinite" />
      <Line width={60} mt={3} animation="0.75s linear 0.125s infinite" />
      <Line width={50} height={7} mt={9} animation="0.75s linear 0.25s infinite" />
    </Content>
  </A>
)

export default EmptyCard
