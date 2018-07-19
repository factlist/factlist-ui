import React from 'react'
import Modal from 'components/Modal'
import Img from './Img'

const ImageModal = ({ onClose, image: { src, title } }) => (
  <Modal onClose={onClose}>
    <Img src={src} alt={title} />
  </Modal>
)

export default ImageModal
