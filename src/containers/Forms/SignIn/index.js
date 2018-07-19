import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signInWithTwitter } from 'modules/auth/actions'
import {
  showSignUpModal,
  showPasswordResetModal,
} from 'modules/modal/actions'
import Container from './Container'
import H2 from './H2'
import H4 from './H4'
import TwitterLogin from './TwitterLogin'
import Seperator from './Seperator'
import Form from './Form'

class SignInForm extends Component {
  onSubmit = this.onSubmit.bind(this)
  signInWithTwitter = this.signInWithTwitter.bind(this)

  signInWithTwitter() {
    const { signInWithTwitter } = this.props

    signInWithTwitter()
  }

  onSubmit(values) {
    const { email, password } = values
    const { signIn } = this.props

    signIn({ email, password })
  }

  render() {
    const {
      authenticating,
      showSignUpModal,
      showPasswordResetModal,
    } = this.props

    return (
      <Container>
        <H2>Welcome back, Fact Checker!</H2>
        <H4>Login to add suspicious claims or submit evidences.</H4>

        <TwitterLogin onClick={this.signInWithTwitter} />

        <Seperator />

        <Form
          authenticating={authenticating}
          onSubmit={this.onSubmit}
          onSignUpClick={showSignUpModal}
          onPasswordResetClick={showPasswordResetModal} />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  authenticating: state.auth.authenticating,
})

const mapDispatchToProps = dispatch => ({
  signIn: (params) => dispatch(signIn(params)),
  signInWithTwitter: () => dispatch(signInWithTwitter()),
  showSignUpModal: () => dispatch(showSignUpModal()),
  showPasswordResetModal: () => dispatch(showPasswordResetModal()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm)
