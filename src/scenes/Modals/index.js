import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeModal } from 'modules/modal/actions'
import {
  SIGN_IN_MODAL,
  ADD_CLAIM_MODAL,
} from 'modules/modal/constants'

// Modals
import SignIn from './SignIn'
import AddClaim from './AddClaim'

// Available modals
const MODAL_COMPONENTS = {
  [SIGN_IN_MODAL]: SignIn,
  [ADD_CLAIM_MODAL]: AddClaim,
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
})

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
