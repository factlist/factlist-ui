import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from 'modules/user/actions'
import { showSignInModal } from 'modules/modal/actions'
import Container from '../SignIn/Container'
import H2 from '../SignIn/H2'
import H4 from '../SignIn/H4'
import TwitterLogin from '../SignIn/TwitterLogin'
import Seperator from '../SignIn/Seperator'
import Form from './Form'

class SignUpForm extends Component {
  onSubmit = this.onSubmit.bind(this)

  onSubmit(values) {
    const { signUp } = this.props

    signUp(values)
  }

  render() {
    const { requesting, showSignInModal } = this.props

    return (
      <Container>
        <H2>Hello, Factchecker!</H2>
        <H4>Sign up to add suspicious claims or submit evidences.</H4>

        <TwitterLogin />

        <Seperator />

        <Form
          requesting={requesting}
          onSignInClick={showSignInModal}
          onSubmit={this.onSubmit} />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  requesting: state.user.requesting,
})

const mapDispatchToProps = (dispatch) => ({
  signUp: (data) => dispatch(signUp(data)),
  showSignInModal: () => dispatch(showSignInModal()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm)
