import React, { Component } from 'react'
import Container from './Container'
import P from './P'
import Close from './Close'

export default class Notification extends Component {
  componentDidUpdate() {
    const {open} = this.props

    if (open) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const {open, msg, onClose} = this.props

    if (!open) {
      return null
    }

    return (
      <Container>
        <Close onClick={onClose} />
        <P>{msg}</P>
      </Container>
    )
  }
}
