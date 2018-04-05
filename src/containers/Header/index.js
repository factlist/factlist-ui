import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import HeaderComponent from 'components/Header'
import { showSignInModal } from 'containers/Modals/actions'

class Header extends Component {
  showSignInModal = this.showSignInModal.bind(this)

  showSignInModal(event) {
    event.preventDefault()

    const { showSignInModal } = this.props

    showSignInModal()
  }

  render() {
    const { user, hideSignInButton } = this.props

    return (
      <Fragment>
        <HeaderComponent
          user={user}
          onClickSignInButton={this.showSignInModal}
          hideSignInButton={hideSignInButton} />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.global.user,
})

const mapDispatchToProps = (dispatch) => ({
  showSignInModal: () => dispatch(showSignInModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
