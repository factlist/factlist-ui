import React, {Component} from 'react'
import cc from 'classcat'
import cm from './modal.css'
import closeIcon from '/static/icons/close.svg'


export default class Modal extends Component {
  constructor() {
    super()
    this.listenKeyboard = this.listenKeyboard.bind(this)
  }

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
    const {show, onClose, children} = this.props

    return <div
      className={cc([cm.container, {
        [cm.hidden]: !show,
      }])}
    >
      <div
        className={cm.overlay}
        onClick={() => onClose()}
      />

      <div className={cm.content}>
        <a
          className={cm.closeButton}
          onClick={() => onClose()}
          href='#nogo'
        >
          <img
            src={closeIcon}
            alt="Close"
          />
        </a>

        {children}
      </div>
    </div>
  }
}
