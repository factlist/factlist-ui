import React, { Component } from 'react'

import { compose } from 'redux'
import { connect } from 'react-redux'
import injectReducer from '../../utils/injectReducer'
import injectSaga from '../../utils/injectSaga'
import reducer from './reducer'
import saga from './saga'
import { userSignUp } from './actions'

class SignupPage extends Component {
  handleChange = this.handleChange.bind(this)
  handleSubmit = this.handleSubmit.bind(this)

  state = {
    username: '',
    email: '',
    password: '',
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.signUp(this.state)
  }

  render() {
    const { loading, error } = this.props

    return (
      <div>
        {loading && 'Loading...'}
        {error && 'Validation'}

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="on"
            onChange={this.handleChange}
          />

          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.signup.loading,
  error: state.signup.error
})

const mapDispatchToProps = (dispatch) => ({
  signUp: (data) => dispatch(userSignUp(data))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'signup', reducer})
const withSaga = injectSaga({ key: 'signup', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SignupPage)
