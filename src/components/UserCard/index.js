import React from 'react'
import Container from './Container'
import Img from './Img'
import Name from './Name'
import Username from './Username'
import Stats from './Stats'

const UserCard = ({
  avatar,
  name,
  username,
  claims = 0,
  evidences = 0,
}) => (
  <Container>
    <Img src={avatar} />
    <Name>{name}</Name>
    <Username>@{username}</Username>

    <Stats
      claims={claims}
      evidences={evidences} />
  </Container>
)

export default UserCard
