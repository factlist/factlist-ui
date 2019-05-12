import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {compose} from 'recompose'
import {withUnstated} from 'utils/unstated'
import { Flex, Box } from '@rebass/grid'
import ModalContainer from 'modules/modal/container'
import NotificationContainer from 'modules/notification/container'
import Header from 'components/Header'
import { Container, Left, Right, Center } from 'components/Layout'
import { updateUser } from 'modules/user/actions'
import Form from './Form'
import H1 from './H1'
import Avatar from './Avatar'

class Settings extends Component {
  state = {
    avatar: null,
  }

  onSubmit = this.onSubmit.bind(this)
  onAvatarSelect = this.onAvatarSelect.bind(this)

  componentWillUnmount() {
    // Reset profile state
  }

  componentDidUpdate() {
    const { notification, updated } = this.props

    if (updated) {
      notification.show('User updated successfully.')
    }
  }

  onSubmit(values) {
    const { bio, name, username, email, password = null } = values
    const { updateUser } = this.props
    const { avatar } = this.state

    updateUser({
      bio,
      name,
      username,
      email,
      password,
      avatar,
    })
  }

  onAvatarSelect(avatar) {
    this.setState({ avatar })
  }

  render() {
    const {user, token, authenticating, updating, modal} = this.props

    return (
      <Fragment>
        <Header
          user={user}
          token={token}
          authenticating={authenticating}
          onClickSignInButton={() => modal.show('SignIn')}
        />

        <Container>
          <Left></Left>
          <Center>
            <H1>Settings</H1>

            <Flex mt={50}>
              <Box mr={40}>
                {user && <Avatar
                  src={user.avatar}
                  onSelect={this.onAvatarSelect} />}
              </Box>
              <Box width={370}>
                <Form
                  requesting={updating}
                  onSubmit={this.onSubmit} />
              </Box>
            </Flex>
          </Center>
          <Right></Right>
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  token: state.auth.token,
  authenticating: state.auth.authenticating,
  updating: state.user.settings.requesting,
  updated: state.user.settings.success,
})

const mapDispatchToProps = (dispatch) => ({
  updateUser: (data) => dispatch(updateUser(data)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withUnstated({
    modal: ModalContainer,
    notification: NotificationContainer,
  })
)(
  Settings
)
