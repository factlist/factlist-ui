import React from 'react'
import { Link } from 'react-router-dom';
import { withState } from 'recompose'
import Popover from 'react-tiny-popover'
import MoreHorizontal from 'react-feather/dist/icons/more-horizontal'
import cm from './menu.module.css'


const Menu = ({ isOpen, setIsOpen, setIsEdit, topicId }) =>
  <Popover
    transitionDuration={-1}
    isOpen={isOpen}
    position='bottom'
    onClickOutside={() => setIsOpen(false)}
    content={
      <Nav
        setIsOpen={setIsOpen}
        setIsEdit={setIsEdit}
        topicId={topicId}
      />
    }
  >
    <button
      className={cm.button}
      onClick={() => setIsOpen(isOpen => !isOpen)}
    >
      <MoreHorizontal width={25} />
    </button>
  </Popover>

export default withState('isOpen', 'setIsOpen', false)(Menu)

const Nav = ({ setIsOpen, setIsEdit, topicId }) =>
  <div className={cm.navContainer}>
    <nav role='menu' outline='none'>
      <div className={cm.navList}>
        <Link
          className={cm.navLink}
          to={`topic/${topicId}/edit`}
          onClick={() => {
            setIsOpen(false);
            setIsEdit(true);
          }}
          children='Edit'
        />

        <div
          className={cm.navItem}
          onClick={() => setIsOpen(false)}
          children='Embed'
        />
      </div>

      <div className={cm.navSeparator} />

      <div className={cm.navList}>
        <div
          className={cm.navItem}
          onClick={() => setIsOpen(false)}
          style={{ color: '#BF0E08' }}
          children='Delete'
        />
      </div>
    </nav>
  </div>
