import { takeLatest, put, fork } from 'redux-saga/effects'
import { push as redirect } from 'react-router-redux'
import axios from 'axios'
import config from 'config'
import {
  SIGN_IN_REQUEST,
  SIGN_OUT_REQUEST,
} from './constants'
import { signInSuccess, signInFailure } from './actions'

// Sign in handler
const signIn = function* ({ email, password }) {
  try {
    // Token request with email & password
    const response = yield axios
      .post(`${config.API_ENDPOINT}/users/login/`, { email, password })

    const token = response.data.token

    yield put(signInSuccess({ token }))

    // Store user's token in local storage to keep user authenticated
    localStorage.setItem('user', JSON.stringify({
      token
    }))
    yield put(redirect('/'))
  } catch (error) {
    yield put(signInFailure(error))
  }
}

// Sign out handler
const signOut = function* () {
  // Remove user's token from local storage
  localStorage.removeItem('user')

  // Redirect
  yield put(redirect('/'))
}

// Watchers
export const watchSignIn = function* () {
  yield takeLatest(SIGN_IN_REQUEST, signIn)
}

export const watchSignOut = function* () {
  yield takeLatest(SIGN_OUT_REQUEST, signOut)
}

export default [
  fork(watchSignIn),
  fork(watchSignOut),
]
