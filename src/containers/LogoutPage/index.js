import { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { LOGOUT_USER } from './constants'

class LogoutPage extends Component {
  componentWillMount() {
    localStorage.removeItem('user')
    this.props.logout()
    this.props.redirect()
  }

  render() {
    return null
  }
}

const mapDispatchToProps = (dispatch) => ({
  redirect: () => dispatch(push('/')),
  logout: () => dispatch({ type: LOGOUT_USER })
})

export default connect(
  null,
  mapDispatchToProps
)(LogoutPage)
