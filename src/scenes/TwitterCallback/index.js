import { Component } from 'react'
import { connect } from 'react-redux'
import { push as redirect } from 'react-router-redux'
import { signInWithToken } from 'modules/auth/actions'

class SignInWithTwitter extends Component {
  componentWillMount() {
    const { signInWithToken } = this.props
    const token = this.props.match.params.token

    signInWithToken(token)
  }

  componentDidUpdate() {
    const { user, redirectToMain } = this.props

    if (user !== null) {
      redirectToMain()
    }
  }

  render() {
    return null
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
})

const mapDispatchToProps = (dispatch) => ({
  signInWithToken: (token) => dispatch(signInWithToken(token)),
  redirectToMain: () => dispatch(redirect('/')),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInWithTwitter)
