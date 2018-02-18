import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { compose } from 'redux'
import injectReducer from '../../utils/injectReducer'
import injectSaga from '../../utils/injectSaga'

import reducer from './reducer'
import saga from './saga'
import { auth } from './actions'

import { push } from 'react-router-redux'

class LoginPage extends Component {
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
      <div>
        {loading && 'Loading...'}
        {error && 'Invalid email or password'}
        <h2>
          <Link to="/">Main</Link>
        </h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="on"
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  auth: (email, password) => dispatch(auth(email, password)),
  redirect: () => dispatch(push('/'))
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
)(LoginPage)
