import { takeLatest, put, fork} from 'redux-saga/effects'
import axios from 'axios'
import config from 'config'
import { push as redirect } from 'react-router-redux'
import { SIGN_UP_REQUEST } from './constants'
import { signUpSuccess, signUpFailure } from './actions'

const signUp = function* (action) {
  try {
    yield axios.post(`${config.API_ENDPOINT}/users/register/`, action.data)

    yield put(signUpSuccess())
    yield put(redirect('/login'))
  } catch (error) {
    yield put(signUpFailure())
  }
}

const watchSignUp = function* () {
  yield takeLatest(SIGN_UP_REQUEST, signUp)
}

export default [
  fork(watchSignUp),
]

