import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hideNotification } from 'modules/notification/actions'
import Container from './Container'
import P from './P'
import Close from './Close'

class Notification extends Component {
  componentDidUpdate() {
    const { show } = this.props

    if (show) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { show, message, hideNotification } = this.props

    if (!show) {
      return null
    }

    return (
      <Container>
        <Close onClick={hideNotification} />
        <P>{message}</P>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  show: state.notification.show,
  message: state.notification.message,
})

const mapDispatchToProps = (dispatch) => ({
  hideNotification: () => dispatch(hideNotification()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notification)
