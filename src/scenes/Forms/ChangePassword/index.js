import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import { changePassword } from 'modules/user/actions'
import { CHANGE_PASSWORD_FORM } from 'modules/user/constants'
import Container from './Container'
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
    const { changePassword, changeKey } = this.props
    const password = values.password

    changePassword({ changeKey, password })
  }

  render() {
    const { success } = this.props

    return (
      <Container>
        {success && <P>Your password change successfully.</P>}
        <Form onSubmit={this.onSubmit} />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  success: state.user.changePassword.success,
})

const mapDispatchToProps = (dispatch) => ({
  changePassword: (params) => dispatch(changePassword(params)),
  reset: () => dispatch(reset(CHANGE_PASSWORD_FORM)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangePassword)
