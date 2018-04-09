import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import injectReducer from 'utils/injectReducer'
import reducer from './reducer'
import { closeModal } from './actions'

// Modals
import SignInModal from './SignInModal'
import AddClaimModal from './AddClaimModal'

// Available modals
const MODAL_COMPONENTS = {
  'SIGN_IN': SignInModal,
  'ADD_CLAIM': AddClaimModal,
}

class Modal extends Component {
  onClose = this.onClose.bind(this)

  onClose() {
    const { closeModal } = this.props

    closeModal()
  }

  render() {
    const { name } = this.props

    if (name === null) {
      return null
    }

    const SpecificModal = MODAL_COMPONENTS[name]

    // Undefined component control
    if (!SpecificModal) {
      console.debug(`There isn't any component with given name: ${name}`)
      return null
    }

    return <SpecificModal onClose={this.onClose} />
  }
}

const mapStateToProps = (state) => ({
  name: state.modal.name,
  // name: 'ADD_CLAIM',
})

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'modal', reducer })

export default compose(
  withReducer,
  withConnect
)(Modal)
