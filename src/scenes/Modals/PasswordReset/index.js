import React from 'react'
import Modal from 'components/Modal'
import PasswordResetForm from 'scenes/Forms/PasswordReset'

const PasswordResetModal = ({ onClose }) => (
  <Modal onClose={onClose}>
    <PasswordResetForm />
  </Modal>
)

export default PasswordResetModal
