import { takeLatest, fork } from 'redux-saga/effects'

import {
  SIGN_IN_REQUEST,
  SIGN_IN_WITH_TWITTER,
  SIGN_IN_WITH_TOKEN,
  SIGN_OUT_REQUEST,
} from '../constants'

// Saga handlers
import signIn from './signIn'
import signInWithTwitter from './signInWithTwitter'
import signInWithToken from './signInWithToken'
import signOut from './signOut'

// Saga watchers
export const watchSignIn = function* () {
  yield takeLatest(SIGN_IN_REQUEST, signIn)
}

export const watchSignInWithTwitter = function* () {
  yield takeLatest(SIGN_IN_WITH_TWITTER, signInWithTwitter)
}

export const watchSignInWithToken = function* () {
  yield takeLatest(SIGN_IN_WITH_TOKEN, signInWithToken)
}

export const watchSignOut = function* () {
  yield takeLatest(SIGN_OUT_REQUEST, signOut)
}

export default [
  fork(watchSignIn),
  fork(watchSignInWithTwitter),
  fork(watchSignInWithToken),
  fork(watchSignOut),
]
