import React from 'react'
import styled from 'styled-components'
import { MoreHorizontal } from 'react-feather'

const Button = styled.button`
  margin-left: 35px;
  border: 0;
  font-size: 25px;
  outline: none;
  cursor: pointer;
`

export default ({ innerRef, onClick }) => (
  <Button type='button' innerRef={innerRef} onClick={onClick}>
    <MoreHorizontal width={25} />
  </Button>
)
