import React from 'react'
import Modal from 'components/Modal'
import PasswordResetForm from 'containers/Forms/PasswordReset'

const PasswordResetModal = ({ onClose }) => (
  <Modal onClose={onClose}>
    <PasswordResetForm />
  </Modal>
)

export default PasswordResetModal
