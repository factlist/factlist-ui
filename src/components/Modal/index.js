import React, { Component, Fragment } from 'react'
import Overlay from './Overlay'
import CloseButton from './CloseButton'
import Container from './Container'

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

    return (
      <Fragment>
        <Overlay onClick={onClose} />

        <Container>
          <CloseButton onClick={onClose} />

          {children}
        </Container>
      </Fragment>
    )
  }
}
