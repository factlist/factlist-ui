import React, { Component, Fragment } from 'react'
import Background from './Background'
import Container from './Container'

export default class Modal extends Component {
  close = this.close.bind(this)

  close() {
    const { onClose } = this.props

    onClose()
  }

  render() {
    const { children } = this.props

    return (
      <Fragment>
        <Background onClick={this.close} />

        <Container>
          {children}
        </Container>
      </Fragment>
    )
  }
}
