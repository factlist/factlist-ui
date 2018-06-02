import React from 'react'
import Modal from 'components/Modal'
import ClaimForm from 'scenes/Forms/Claim'

const AddClaimModal = ({ onClose }) => (
  <Modal onClose={onClose}>
    <ClaimForm />
  </Modal>
)

export default AddClaimModal
