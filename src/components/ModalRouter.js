import {createElement as h} from 'react'
import {Modal} from 'components'
import {SignIn, SignUp, PasswordReset, Image} from 'scenes'


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
