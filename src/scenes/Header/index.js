import React from 'react'
import { connect } from 'react-redux'
import HeaderComponent from 'components/Header'
import {
  showSignInModal,
} from 'modules/modal/actions'

const Header = ({
  authenticating,
  user,
  hideSignInButton,
  showSignInModal,
}) => (
  <HeaderComponent
    user={user}
    authenticating={authenticating}
    onClickSignInButton={showSignInModal}
    hideSignInButton={hideSignInButton} />
)

const mapStateToProps = state => ({
  authenticating: state.auth.authenticating,
  user: state.auth.user,
})

const mapDispatchToProps = (dispatch) => ({
  showSignInModal: () => dispatch(showSignInModal()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
