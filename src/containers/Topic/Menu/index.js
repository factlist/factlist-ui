import React from 'react'
import { withState } from 'recompose'
import Popover from 'react-tiny-popover'
import Nav from './Nav'
import { MoreHorizontal } from 'react-feather'
import styled from 'styled-components'

const enhance = withState('isOpen', 'setIsOpen', false)

const Menu = ({ isOpen, setIsOpen, setIsEdit }) => (
  <Popover
    transitionDuration={-1}
    isOpen={isOpen}
    position='bottom'
    content={<Nav setIsOpen={setIsOpen} setIsEdit={setIsEdit} />}
    onClickOutside={() => setIsOpen(false)}>
    <Button onClick={() => setIsOpen(isOpen => !isOpen)}>
      <MoreHorizontal width={25} />
    </Button>
  </Popover>
)

export default enhance(Menu)

const Button = styled.button`
  border-color: transparent;
  color: #4c4c4c;
`;
