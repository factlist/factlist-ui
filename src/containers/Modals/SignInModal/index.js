import React from 'react'
import Modal from 'components/Modal'
import SignInForm from 'containers/Forms/SignInForm'

// SignInModal
const SignInModal = ({ onClose }) => (
  <Modal onClose={onClose}>
    <SignInForm />
  </Modal>
)

export default SignInModal
