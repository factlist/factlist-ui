import React from 'react'
import {compose} from 'recompose'
import {withUnstated} from 'utils/unstated'
import {withFetch, formFetch} from 'utils/request'
import ModalContainer from 'modules/modal/container'
import {saveToken} from 'utils/storage'
import history from 'store/history'
import NotificationContainer from 'modules/notification/container'
import Container from '../SignIn/Container'
import H2 from '../SignIn/H2'
import H4 from '../SignIn/H4'
import TwitterLogin from '../SignIn/TwitterLogin'
import Seperator from '../SignIn/Seperator'
import Form from './Form'


const SignUpScene = ({
  signUp, signUpFetch = {},
  signInTwitter,
  modal,
}) =>
    <Container>
      <H2>Hello, Factchecker!</H2>
      <H4>Sign up to add suspicious claims or submit evidences.</H4>

      <TwitterLogin onClick={signInTwitter} />

      <Seperator />

      <Form
        requesting={signUpFetch.pending}
        onSignInClick={() => modal.show('SignIn')}
        onSubmit={signUp}
      />
    </Container>

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
