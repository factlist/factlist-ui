import { takeLatest, put, fork } from 'redux-saga/effects'
import { push as redirect } from 'react-router-redux'
import axios from 'axios'
import { stopSubmit, startSubmit } from 'redux-form'
import config from 'config'
import { saveToken, removeToken } from 'utils/storage'
import formatFormErrors from 'utils/formatFormErrors'
import { userFetched } from 'modules/user/actions'

import {
  SIGN_IN_REQUEST,
  SIGN_OUT_REQUEST,
  SIGN_IN_FORM_NAME,
} from './constants'
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
} from './actions'

// Sign in handler
const signIn = function* ({ email, password }) {
  try {
    yield put(startSubmit(SIGN_IN_FORM_NAME))

    // Token request with email & password
    const response = yield axios
      .post(`${config.API_ENDPOINT}/users/login/`, { email, password })

    const token = response.data.token

    yield put(signInSuccess({ token }))

    // Store user's token in local storage to keep user authenticated
    saveToken(token)

    yield put(userFetched(response.data))

    yield put(redirect('/'))
  } catch (error) {
    let errors = formatFormErrors(error.response.data)

    yield put(stopSubmit(SIGN_IN_FORM_NAME, errors))

    yield put(signInFailure(error))
  }
}

// Sign out handler
const signOut = function* () {
  // Remove user's token from local storage
  removeToken()

  yield put(signOutSuccess())

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
