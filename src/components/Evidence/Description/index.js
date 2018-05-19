import React from 'react'
import Container from './Container'
import ConclusionBadge from './ConclusionBadge'
import P from './P'
import Linkify from 'components/Linkify'

const Description = ({ conclusion, text }) => (
  <Container>
    <ConclusionBadge conclusion={conclusion} />
    <P>
      <Linkify>http://google.com Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Linkify>
    </P>
  </Container>
)

export default Description
