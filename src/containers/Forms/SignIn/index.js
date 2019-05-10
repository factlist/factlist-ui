import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose} from 'recompose'
import {withUnstated} from 'utils/unstated'
import ModalContainer from 'modules/modal/container'
import { signIn, signInWithTwitter } from 'modules/auth/actions'
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
    const {authenticating, modal} = this.props

    return (
      <Container>
        <H2>Welcome back, Fact Checker!</H2>
        <H4>Login to add suspicious claims or submit evidences.</H4>

        <TwitterLogin onClick={this.signInWithTwitter} />

        <Seperator />

        <Form
          authenticating={authenticating}
          onSubmit={this.onSubmit}
          onSignUpClick={() => modal.show('SignUp')}
          onPasswordResetClick={() => modal.show('PasswordReset')} />
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
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withUnstated({modal: ModalContainer}),
)(
  SignInForm
)
