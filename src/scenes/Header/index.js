import React from 'react'
import { connect } from 'react-redux'
import HeaderComponent from 'components/Header'
import {
  showSignInModal,
  showAddClaimModal
} from 'modules/modal/actions'

const Header = ({
  authenticating,
  user,
  hideSignInButton,
  showSignInModal,
  showAddClaimModal,
}) => (
  <HeaderComponent
    user={user}
    authenticating={authenticating}
    onClickSignInButton={showSignInModal}
    onClickClaimButton={showAddClaimModal}
    hideSignInButton={hideSignInButton} />
)

const mapStateToProps = state => ({
  authenticating: state.auth.authenticating,
  user: state.auth.user,
})

const mapDispatchToProps = (dispatch) => ({
  showSignInModal: () => dispatch(showSignInModal()),
  showAddClaimModal: () => dispatch(showAddClaimModal()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
