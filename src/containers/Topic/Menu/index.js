import React from 'react'
import { withState } from 'recompose'
import Popover from 'react-tiny-popover'
import Nav from './Nav'

const enhance = withState('isOpen', 'setIsOpen', false)

const Menu = enhance(({ isOpen, setIsOpen }) => (
  <Popover
    transitionDuration={-1}
    isOpen={isOpen}
    position='bottom'
    content={<Nav />}
    onClickOutside={() => setIsOpen(false)}>
      <button onClick={() => setIsOpen(isOpen => !isOpen)}>-</button>
  </Popover>
))

export default Menu
