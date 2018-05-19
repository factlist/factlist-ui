import React from 'react'
import Container from './Container'
import ConclusionBadge from './ConclusionBadge'
import P from './P'
import Linkify from 'components/Linkify'

const Description = ({ conclusion, text }) => (
  <Container>
    <ConclusionBadge conclusion={conclusion} />
    <P>
      <Linkify>{text}</Linkify>
    </P>
  </Container>
)

export default Description
