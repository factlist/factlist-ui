import {createElement as h} from 'react'
import {withUnstated} from 'utils/unstated'
import ModalContainer from 'modules/modal/container'
import SignIn from './SignIn'
import SignUp from './SignUp'
import PasswordReset from './PasswordReset'
import Image from './Image'


const modalComponents = {SignIn, SignUp, PasswordReset, Image}


export default withUnstated({
  modal: ModalContainer,
})(
  ({modal}) =>
    ! modal.state.open
      ? null
      : h(
        modalComponents[modal.state.componentName],
        {
          ...modal.state.componentProps,
          onClose: modal.hide,
        }
      )
)
