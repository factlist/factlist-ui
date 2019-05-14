import React from 'react'
import cm from './userCard.module.css'


const UserCard = ({avatar, name, username}) =>
  <div className={cm.card}>
    <img src={avatar} alt='Your avatar' />
    <span className={cm.name}>{name}</span>
    <span className={cm.username}>@{username}</span>
  </div>

export default UserCard
