import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import HeaderComponent from 'components/Header'
import Modal from 'components/Modal'
import ClaimForm from 'containers/Forms/ClaimForm'

class Header extends Component {
  state = {
    isClaimModalOpen: false
  }

  openClaimModal = this.openClaimModal.bind(this)
  closeClaimModal = this.closeClaimModal.bind(this)

  openClaimModal() {
    this.setState({ isClaimModalOpen: true })
  }

  closeClaimModal() {
    this.setState({ isClaimModalOpen: false })
  }

  render() {
    const { user } = this.props
    const { isClaimModalOpen } = this.state

    return (
      <Fragment>
        <HeaderComponent
          user={user}
          onClickReportButton={this.openClaimModal} />

        {isClaimModalOpen && <Modal onClose={this.closeClaimModal}>
          <ClaimForm />
        </Modal>}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.global.user
})

export default connect(mapStateToProps)(Header)
