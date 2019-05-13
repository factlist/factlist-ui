import {createElement as h} from 'react'
import Modal from 'components/Modal'
import SignIn from 'scenes/SignIn'
import SignUp from 'scenes/SignUp'
import PasswordReset from 'scenes/PasswordReset'
import Image from 'scenes/Image'


const modalComponents = {
  SignIn,
  SignUp,
  PasswordReset,
  Image,
}


export default ({open, componentName, componentProps, onClose}) =>
  ! open
    ? null
    : h(
        Modal,
        {onClose},
        h(
          modalComponents[componentName],
          componentProps
        )
      )
