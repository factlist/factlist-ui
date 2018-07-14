import { put } from 'redux-saga/effects'
import { push as redirect } from 'react-router-redux'
import { removeToken } from 'utils/storage'
import { signOutSuccess } from '../actions'

const signOut = function* () {
  // Remove user's token from local storage
  removeToken()

  yield put(signOutSuccess())

  // Redirect
  yield put(redirect('/'))
}

export default signOut
