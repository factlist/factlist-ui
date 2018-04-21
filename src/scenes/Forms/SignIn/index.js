import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from 'modules/auth/actions'
import Container from './Container'
import H2 from './H2'
import H4 from './H4'
import Input from './Input'
import Form from './Form'
import SubmitButton from './SubmitButton'
import TwitterButton from './TwitterButton'
import OrText from './OrText'
import PasswordResetLink from './PasswordResetLink'
import CreateAccountLink from './CreateAccountLink'

class SignInForm extends Component {
  handleSubmit = this.handleSubmit.bind(this)
  handleChange = this.handleChange.bind(this)
  state = { email: '', password: '' }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()

    const { email, password } = this.state
    const { signIn } = this.props

    signIn({ email, password })
  }

  render() {
    const { className, authenticating, error } = this.props

    return (
      <Container className={className}>
        {authenticating && 'Authenticating...'}
        {error && 'Invalid email or password'}

        <H2>Welcome back, Factchecker!</H2>
        <H4>Login to add suspicious claims or submit evidences.</H4>

        <Form onSubmit={this.handleSubmit}>
          <TwitterButton />

          <OrText />

          <Input
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            onChange={this.handleChange}
          />

          <Input
            type="password"
            name="password"
            id="password"
            autoComplete="on"
            placeholder="Password"
            onChange={this.handleChange}
          />

          <PasswordResetLink />

          <SubmitButton>Sign In</SubmitButton>

          <CreateAccountLink />
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  authenticating: state.auth.authenticating,
})

const mapDispatchToProps = dispatch => ({
  signIn: ({ email, password }) => dispatch(signIn({ email, password }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm)
