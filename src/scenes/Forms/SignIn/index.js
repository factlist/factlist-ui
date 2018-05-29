import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from 'modules/auth/actions'
import Container from './Container'
import H2 from './H2'
import H4 from './H4'
import TwitterLogin from './TwitterLogin'
import Seperator from './Seperator'
import Form from './Form'

class SignInForm extends Component {
  onSubmit = this.onSubmit.bind(this)

  onSubmit(values) {
    const { email, password } = values
    const { signIn } = this.props

    signIn({ email, password })
  }

  render() {
    const { className, authenticating, error } = this.props

    return (
      <Container className={className}>
        <H2>Welcome back, Factchecker!</H2>
        <H4>Login to add suspicious claims or submit evidences.</H4>

        <TwitterLogin />

        <Seperator />

        <Form
          authenticating={authenticating}
          onSubmit={this.onSubmit} />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  authenticating: state.auth.authenticating,
  error: state.auth.error,
})

const mapDispatchToProps = dispatch => ({
  signIn: (params) => dispatch(signIn(params))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm)
