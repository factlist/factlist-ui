import React from 'react'
import {compose, withUser, withModal} from 'adapters'
import {Header} from 'components'
import cm from './layout.module.css'


const Layout = ({user, modal, children}) => <div className={cm.container}>
  <Header
      user={user.state.user}
      token={user.state.token}
      onClickSignInButton={() => modal.show('SignIn')}
  />

  <div>
    {children}
  </div>
</div>

export default compose(
  withUser,
  withModal
)(
  Layout
)
