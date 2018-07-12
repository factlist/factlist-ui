import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeModal } from 'modules/modal/actions'
import {
  SIGN_IN_MODAL,
  SIGN_UP_MODAL,
  ADD_CLAIM_MODAL,
  PASSWORD_RESET_MODAL,
} from 'modules/modal/constants'

// Modals
import SignIn from './SignIn'
import SignUp from './SignUp'
import AddClaim from './AddClaim'
import PasswordReset from './PasswordReset'

// Available modals
const MODAL_COMPONENTS = {
  [SIGN_IN_MODAL]: SignIn,
  [SIGN_UP_MODAL]: SignUp,
  [ADD_CLAIM_MODAL]: AddClaim,
  [PASSWORD_RESET_MODAL]: PasswordReset,
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
