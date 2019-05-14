import React from 'react'
import {compose} from 'recompose'
import {withUnstated} from 'utils/unstated'
import {withFetch, formFetch} from 'utils/request'
import jwtDecode from 'jwt-decode'
import history from 'store/history'
import ModalContainer from 'modules/modal/container'
import NotificationContainer from 'modules/notification/container'
import UserContainer from 'modules/auth/container'
import client from 'modules/graphql'
import {getUser} from 'modules/graphql/requests'
import {saveToken, saveUser} from 'utils/storage'
import Container from './Container'
import H2 from './H2'
import H4 from './H4'
import TwitterLogin from './TwitterLogin'
import Seperator from './Seperator'
import Form from './Form'


const SignInScene = ({
  signIn, signInFetch = {},
  signInTwitter,
  modal,
}) =>
  <Container>
    <H2>Welcome back, Fact Checker!</H2>
    <H4>Login to add suspicious claims or submit evidences.</H4>

    <TwitterLogin onClick={signInTwitter} />

    <Seperator />

    <Form
      onSubmit={signIn}
      onSignUpClick={() => modal.show('SignUp')}
      onPasswordResetClick={() => modal.show('PasswordReset')}
    />
  </Container>

export default compose(
  withUnstated({
    user: UserContainer,
    modal: ModalContainer,
    notification: NotificationContainer,
  }),

  withFetch(({user, modal, notification}) => ({
    signIn: formFetch(params => ({
      signInFetch: {
        url: '/auth/login',
        method: 'post',
        body: params,
        then: resp => handleSignInSuccess(resp, user, modal),
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
  SignInScene
)

const handleSignInSuccess = (resp, user, modal) => {
  saveToken(resp.token)
  user.setToken(resp.token)

  client.query({
    query: getUser,
    variables: {id: jwtDecode(resp.token).sub},
  })
    .then(resp => {
      modal.hide()
      saveUser(resp.data.getUserById)
      return user.setUser(resp.data.getUserById)
    })
    .then(() =>
      history.push('/')
    )
}

const handleSignInTwitterSuccess = resp =>
  window.top.location = resp.data.redirect_link

const handleSignInTwitterError = (resp, notification) =>
  notification.show(
    'We can\'t authenticate you with Twitter right now, please try again later.'
  )
