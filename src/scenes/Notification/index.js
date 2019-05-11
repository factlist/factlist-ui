import React, { Component } from 'react'
import {withUnstated} from 'utils/unstated'
import NotificationContainer from 'modules/notification/container'
import Container from './Container'
import P from './P'
import Close from './Close'

class Notification extends Component {
  componentDidUpdate() {
    const { notification } = this.props

    if (notification.state.open) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { notification} = this.props

    if (!notification.state.open) {
      return null
    }

    return (
      <Container>
        <Close onClick={notification.hide} />
        <P>{notification.state.msg}</P>
      </Container>
    )
  }
}

export default withUnstated({notification: NotificationContainer})(
  Notification
)
