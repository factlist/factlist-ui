import { Component } from 'react'
import { connect } from 'react-redux'
import { signInWithToken } from 'modules/auth/actions'

class SignInWithTwitter extends Component {
  componentWillMount() {
    const { signInWithToken } = this.props
    const token = this.props.match.params.token

    signInWithToken(token)
  }

  render() {
    return null
  }
}

const mapDispatchToProps = (dispatch) => ({
  signInWithToken: (token) => dispatch(signInWithToken(token))
})

export default connect(
  null,
  mapDispatchToProps,
)(SignInWithTwitter)
