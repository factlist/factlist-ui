import React from 'react'
import jwtDecode from 'jwt-decode'
import gql from 'graphql-tag'
import {history} from 'store'
import {compose, withUser, withModal, withNotification, withFetch, formFetch}
  from 'adapters'
import client from 'lib/graphql'
import {saveToken, saveUser} from 'lib/storage'
import TwitterLogin from './TwitterLogin'
import Form from './Form'
import cm from './signin.module.css'


const userQuery = gql`query($id: ID!) {
  getUserById(id: $id) {
    id, name, email, username, topics {
      id, title, user_id, links {
        id, title, url, tags {id, title}
      }
    }
  }
}`


const SignInScene = ({
  signIn, signInFetch = {},
  signInTwitter,
  modal,
}) =>
  <div className={cm.container}>
    <h2 className={cm.title}>
      Welcome back, Fact Checker!
    </h2>

    <h4 className={cm.description}>
      Login to add suspicious claims or submit evidences.
    </h4>

    <TwitterLogin onClick={signInTwitter} />

    <span className={cm.separator}>or</span>

    <Form
      onSubmit={signIn}
      onSignUpClick={() => modal.show('SignUp')}
      onPasswordResetClick={() => modal.show('PasswordReset')}
    />
  </div>

export default compose(
  withUser,

  withModal,

  withNotification,

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
    query: userQuery,
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
