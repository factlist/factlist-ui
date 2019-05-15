import React from 'react'
import {withUnstated} from 'utils/unstated'
import UserContainer from 'modules/auth/container'
import ModalContainer from 'modules/modal/container'
import Header from 'components/Header'
import cm from './layout.module.css'


const Layout = ({user, modal, children}) => <>
  <Header
      user={user.state.user}
      token={user.state.token}
      onClickSignInButton={() => modal.show('SignIn')}
  />

  <div className={cm.container}>
    {children}
  </div>
</>

export default withUnstated({
  user: UserContainer,
  modal: ModalContainer,
})(
  Layout
)
