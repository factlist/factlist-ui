import React, { Component } from 'react'
import cm from './notification.css'


export default class Notification extends Component {
  componentDidUpdate() {
    const {open} = this.props

    if (open) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const {open, msg, onClose} = this.props

    if (!open)
      return null

    return <div className={cm.notif}>
      <CloseBtn onClick={onClose} />
      <p>{msg}</p>
    </div>
  }
}

/* eslint-disable max-len */
const CloseBtn = ({onClick}) =>
  <a
    className={cm.closeBtn}
    onClick={onClick}
    href='#nogo'
  >
    <svg viewBox="0 0 1792 1792" width="1em" height="1em">
      <path
        d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
        fill="#fff"
      />
    </svg>
  </a>
/* eslint-enable max-len */
