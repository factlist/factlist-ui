import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import { push as redirect } from 'react-router-redux'
import reducer from './reducer'
import saga from './saga'
import { auth } from './actions'

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
  state = {
    email: '',
    password: ''
  }

  componentWillMount() {
    if (this.props.user) {
      this.props.redirect()
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()

    const { email, password } = this.state
    this.props.auth(email, password)
  }

  render() {
    const { loading, error } = this.props

    return (
      <Container>
        {loading && 'Loading...'}
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

const mapDispatchToProps = (dispatch) => ({
  auth: (email, password) => dispatch(auth(email, password)),
  redirect: () => dispatch(redirect('/'))
})

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  user: state.global.user
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'auth', reducer})
const withSaga = injectSaga({ key: 'auth', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SignInForm)
