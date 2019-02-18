import React from 'react'
import { connect } from 'react-redux'
import HeaderComponent from 'components/Header'
import {
  showSignInModal,
} from 'modules/modal/actions'

const Header = ({
  authenticating,
  token,
  user,
  hideSignInButton,
  showSignInModal,
  onClickNewTopic,
}) => (
  <HeaderComponent
    user={user}
    token={token}
    authenticating={authenticating}
    onClickSignInButton={showSignInModal}
    onClickNewTopic={onClickNewTopic}
    hideSignInButton={hideSignInButton} />
)

const mapStateToProps = state => ({
  authenticating: state.auth.authenticating,
  token: state.auth.token,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  showSignInModal: () => dispatch(showSignInModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
