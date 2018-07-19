import React, { Component } from 'react'
import OuterContainer from './OuterContainer'
import InnerContainer from './InnerContainer'
import Overlay from './Overlay'
import Content from './Content'
import CloseButton from './CloseButton'

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
      <OuterContainer>
        <Overlay onClick={onClose} />

        <InnerContainer>
          <Content>
            <CloseButton onClick={onClose} />

            {children}
          </Content>
        </InnerContainer>
      </OuterContainer>
    )
  }
}
