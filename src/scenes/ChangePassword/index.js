import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withUnstated} from 'utils/unstated'
import {compose} from 'recompose'
import { reset } from 'redux-form'
import ModalContainer from 'modules/modal/container'
import Header from 'components/Header'
import {Container, Left, Right, Center} from 'components/Layout'
import { changePassword } from 'modules/user/actions'
import { CHANGE_PASSWORD_FORM } from 'modules/user/constants'
import FormContainer from './Container'
import P from './P'
import Form from './Form'

class ChangePassword extends Component {
  onSubmit = this.onSubmit.bind(this)

  componentDidUpdate() {
    const { success, reset } = this.props

    if (success) {
      reset()
    }
  }

  onSubmit(values) {
    const { changePassword, match: {changeKey} } = this.props
    const password = values.password

    changePassword({ changeKey, password })
  }

  render() {
    const {success, user, token, authenticating, modal} = this.props

    return <>
      <Header
        user={user}
        token={token}
        authenticating={authenticating}
        onClickSignInButton={() => modal.show('SignIn')}
      />

      <Container>
        <Left />

        <Center>
          <FormContainer>
            {success && <P>Your password change successfully.</P>}
            <Form onSubmit={this.onSubmit} />
          </FormContainer>
        </Center>

        <Right />
      </Container>
    </>
  }
}

const mapStateToProps = (state) => ({
  success: state.user.changePassword.success,
  user: state.auth.user,
  token: state.auth.token,
  authenticating: state.auth.authenticating,
})

const mapDispatchToProps = (dispatch) => ({
  changePassword: (params) => dispatch(changePassword(params)),
  reset: () => dispatch(reset(CHANGE_PASSWORD_FORM)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withUnstated({modal: ModalContainer})
)(
  ChangePassword
)
