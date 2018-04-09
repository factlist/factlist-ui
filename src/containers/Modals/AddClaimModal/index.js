import React from 'react'
import Modal from 'components/Modal'
import SignInForm from 'containers/Forms/SignInForm'
import ClaimForm from 'containers/Forms/ClaimForm'

const AddClaimModal = ({ onClose }) => (
  <Modal onClose={onClose}>
    <ClaimForm />
  </Modal>
)

export default AddClaimModal
