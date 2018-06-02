import React from 'react'
import Container from './Container'
import Img from './Img'
import Name from './Name'
import Username from './Username'
import Stats from './Stats'

const UserCard = () => (
  <Container>
    <Img src="/images/example-avatar-2.png" />
    <Name>Şerattin Yarar</Name>
    <Username>@serafettin</Username>

    <Stats />
  </Container>
)

export default UserCard
