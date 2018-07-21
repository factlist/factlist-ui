import { Component } from 'react'
import { connect } from 'react-redux'
import { signOut } from 'modules/auth/actions'

class SignOut extends Component {
  componentDidMount() {
    const { signOut } = this.props

    signOut()
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
  }
}

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
})

export default connect(
  null,
  mapDispatchToProps
)(SignOut)
