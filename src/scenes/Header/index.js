import React from 'react'
import {compose} from 'recompose'
import { connect } from 'react-redux'
import {withUnstated} from 'utils/unstated'
import ModalContainer from 'modules/modal/container'
import HeaderComponent from 'components/Header'

const Header = ({
  authenticating,
  token,
  user,
  modal,
  hideSignInButton,
}) => (
  <HeaderComponent
    user={user}
    token={token}
    authenticating={authenticating}
    onClickSignInButton={() => modal.show('SignIn')}
    hideSignInButton={hideSignInButton} />
)

const mapStateToProps = state => ({
  authenticating: state.auth.authenticating,
  token: state.auth.token,
  user: state.auth.user,
})

export default compose(
  connect(mapStateToProps),
  withUnstated({modal: ModalContainer})
)(
  Header
)
