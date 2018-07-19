import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import { FORGOT_PASSWORD_FORM } from 'modules/user/constants'
import { createPasswordChangeKey } from 'modules/user/actions'
import Form from './Form'
import Container from './Container'
import P from './P'
import H2 from './H2'

class PasswordReset extends Component {
  onSubmit = this.onSubmit.bind(this)

  componentDidUpdate() {
    const { success, reset } = this.props

    if (success) {
      reset()
    }
  }

  onSubmit(values) {
    const { createPasswordChangeKey } = this.props
    const { email } = values

    createPasswordChangeKey(email)
  }

  render() {
    const { success } = this.props

    return (
      <Container>
        <H2>Reset your password</H2>
        {success && <P>Check your email for a link to reset your password.
          If it doesn’t appear within a few minutes, check your spam folder.</P>}
        <Form onSubmit={this.onSubmit} />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  success: state.user.forgotPassword.success,
})

const mapDispatchToProps = (dispatch) => ({
  createPasswordChangeKey: (email) => dispatch(createPasswordChangeKey(email)),
  reset: () => dispatch(reset(FORGOT_PASSWORD_FORM)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordReset)
