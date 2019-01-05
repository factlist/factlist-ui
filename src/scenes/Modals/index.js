import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeModal } from 'modules/modal/actions'
import {
  SIGN_IN_MODAL,
  SIGN_UP_MODAL,
  PASSWORD_RESET_MODAL,
  IMAGE_MODAL,
} from 'modules/modal/constants'

// Modals
import SignIn from './SignIn'
import SignUp from './SignUp'
import PasswordReset from './PasswordReset'
import Image from './Image'

// Available modals
const MODAL_COMPONENTS = {
  [SIGN_IN_MODAL]: SignIn,
  [SIGN_UP_MODAL]: SignUp,
  [PASSWORD_RESET_MODAL]: PasswordReset,
  [IMAGE_MODAL]: Image,
}

class Modal extends Component {
  onClose = this.onClose.bind(this)

  onClose() {
    const { closeModal } = this.props

    closeModal()
  }

  render() {
    const { name, data } = this.props

    if (name === null) {
      return null
    }

    const SpecificModal = MODAL_COMPONENTS[name]

    // Undefined component control
    if (!SpecificModal) {
      console.debug(`There isn't any component with given name: ${name}`)
      return null
    }

    return <SpecificModal onClose={this.onClose} {...data} />
  }
}

const mapStateToProps = (state) => ({
  name: state.modal.name,
  data: state.modal.data,
})

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
