import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import HeaderComponent from 'components/Header'
import {
  showSignInModal,
  showAddClaimModal
} from 'modules/modal/actions'

class Header extends Component {
  showSignInModal = this.showSignInModal.bind(this)
  showAddClaimModal = this.showAddClaimModal.bind(this)

  showSignInModal(event) {
    event.preventDefault()

    const { showSignInModal } = this.props

    showSignInModal()
  }

  showAddClaimModal(event) {
    event.preventDefault()

    const { showAddClaimModal, showSignInModal, user } = this.props

    if (user) {
      showAddClaimModal()
    } else {
      showSignInModal()
    }
  }

  render() {
    const { user, hideSignInButton } = this.props

    return (
      <Fragment>
        <HeaderComponent
          user={user}
          onClickSignInButton={this.showSignInModal}
          onClickClaimButton={this.showAddClaimModal}
          hideSignInButton={hideSignInButton} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
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
