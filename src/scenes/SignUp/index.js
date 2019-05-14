import React from 'react'
import {compose} from 'recompose'
import {withUnstated} from 'utils/unstated'
import {withFetch, formFetch} from 'utils/request'
import ModalContainer from 'modules/modal/container'
import {saveToken} from 'utils/storage'
import history from 'store/history'
import NotificationContainer from 'modules/notification/container'
import TwitterLogin from '../SignIn/TwitterLogin'
import Form from './Form'
import cm from 'scenes/SignIn/signin.module.css'


const SignUpScene = ({
  signUp, signUpFetch = {},
  signInTwitter,
  modal,
}) =>
    <div className={cm.container}>
      <h2 className={cm.title}>
        Hello, Factchecker!
      </h2>

      <h4 className={cm.description}>
        Sign up to add suspicious claims or submit evidences.
      </h4>

      <TwitterLogin onClick={signInTwitter} />

      <span className={cm.separator}>or</span>

      <Form
        requesting={signUpFetch.pending}
        onSignInClick={() => modal.show('SignIn')}
        onSubmit={signUp}
      />
    </div>

export default compose(
  withUnstated({
    modal: ModalContainer,
    notification: NotificationContainer,
  }),

  withFetch(({notification}) => ({
    signUp: formFetch(params => ({
      signUpFetch: {
        url: '/auth/register',
        method: 'post',
        body: params,
        then: handleSignUpSuccess,
      }
    })),

    signInTwitter: () => ({
      signInTwitterFetch: {
        url: '/auth/twitter',
        then: handleSignInTwitterSuccess,
        catch: resp => handleSignInTwitterError(resp, notification),
      },
    }),
  }))
)(
  SignUpScene
)

const handleSignUpSuccess = resp => {
  saveToken(resp.token)
  history.push('/')
}

const handleSignInTwitterSuccess = resp =>
  window.top.location = resp.data.redirect_link

const handleSignInTwitterError = (resp, notification) =>
  notification.show(
    'We can\'t authenticate you with Twitter right now, please try again later.'
  )
