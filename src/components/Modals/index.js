import {createElement as h} from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import PasswordReset from './PasswordReset'
import Image from './Image'


const modalComponents = {SignIn, SignUp, PasswordReset, Image}


export default ({open, componentName, componentProps, onClose}) =>
  ! open
    ? null
    : h(
      modalComponents[componentName],
      {...componentProps, onClose}
    )
