import React from 'react'
import Container from './Container'
import Img from './Img'
import Name from './Name'
import Username from './Username'

const UserCard = ({
  avatar,
  name,
  username,
}) => (
  <Container>
    <Img src={avatar} />
    <Name>{name}</Name>
    <Username>@{username}</Username>
  </Container>
)

export default UserCard
