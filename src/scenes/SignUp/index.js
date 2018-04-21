import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { signUp } from 'modules/user/actions'

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

    const { signUp } = this.props

    signUp(this.state)
  }

  render() {
    const { loading, error } = this.props

    return (
      <Fragment>
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
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  error: state.user.error
})

const mapDispatchToProps = (dispatch) => ({
  signUp: (data) => dispatch(signUp(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage)
