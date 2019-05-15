import React, { Component } from 'react'
import cm from './modal.module.css'


export default class Modal extends Component {
  listenKeyboard = this.listenKeyboard.bind(this)

  componentDidMount() {
    window.addEventListener('keydown', this.listenKeyboard.bind(this), true)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.listenKeyboard.bind(this), true)
  }

  listenKeyboard(event) {
    const { onClose } = this.props
    if (event.key === 'Escape' || event.keyCode === 27) {
      onClose()
    }
  }

  render() {
    const { onClose, children } = this.props

    return <div className={cm.container}>
      <div
        className={cm.overlay}
        onClick={onClose}
      />

      <div className={cm.content}>
        <a
          className={cm.closeButton}
          onClick={onClose}
          href='#nogo'
        >
          <img
            src="/images/icons/close.svg"
            alt="Close"
          />
        </a>

        {children}
      </div>
    </div>
  }
}
