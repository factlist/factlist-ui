import { takeLatest, fork } from 'redux-saga/effects'
import {
  SIGN_UP_REQUEST,
  UPDATE_USER_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  CHANGE_PASSWORD_REQUEST,
} from '../constants'

// Handlers
import signUp from './signUp'
import update from './update'
import forgotPassword from './forgotPassword'
import changePassword from './changePassword'

// Watchers
const watchSignUp = function* () {
  yield takeLatest(SIGN_UP_REQUEST, signUp)
}

const watchUpdate = function* () {
  yield takeLatest(UPDATE_USER_REQUEST, update)
}

const watchForgotPassword = function* () {
  yield takeLatest(FORGOT_PASSWORD_REQUEST, forgotPassword)
}

const watchChangePassword = function* () {
  yield takeLatest(CHANGE_PASSWORD_REQUEST, changePassword)
}

export default [
  fork(watchSignUp),
  fork(watchUpdate),
  fork(watchForgotPassword),
  fork(watchChangePassword),
]

