import { takeLatest, put, fork} from 'redux-saga/effects'
import axios from 'axios'
import config from 'config'
import _ from 'utils/_'
import { push as redirect } from 'react-router-redux'
import { signInSuccess } from 'modules/auth/actions'
import { SIGN_UP_REQUEST } from './constants'
import { signUpSuccess, signUpFailure } from './actions'
import { stopSubmit, startSubmit } from 'redux-form'
import { SIGN_UP_FORM_NAME } from './constants'

const signUp = function* (action) {
  try {
    yield put(startSubmit(SIGN_UP_FORM_NAME))

    const response = yield axios.post(`${config.API_ENDPOINT}/users/register/`, action.data)
    const { token } = response.data

    yield put(signUpSuccess())

    // Store user's token in local storage to keep user authenticated
    localStorage.setItem('user', JSON.stringify({
      token
    }))

    yield put(signInSuccess({ token }))

    yield put(redirect('/'))
  } catch (error) {
    let errors = error.response.data

    // Prepare errors for redux-form
    errors = Object.keys(errors).reduce((list, key) => {
      list[key] = _.isArray(errors[key]) ? errors[key][0] : errors[key]

      return list
    }, {})

    yield put(stopSubmit(SIGN_UP_FORM_NAME, errors))

    yield put(signUpFailure())
  }
}

const watchSignUp = function* () {
  yield takeLatest(SIGN_UP_REQUEST, signUp)
}

export default [
  fork(watchSignUp),
]

