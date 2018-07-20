import { put } from 'redux-saga/effects'
import axios from 'axios'
import config from 'config'
import formatFormErrors from 'utils/formatFormErrors'
import { push as redirect } from 'react-router-redux'
import { stopSubmit, startSubmit } from 'redux-form'
import { signInSuccess } from 'modules/auth/actions'
import { saveToken } from 'utils/storage'
import { SIGN_UP_FORM_NAME } from '../constants'
import { signUpSuccess, signUpFailure } from '../actions'

const signUp = function* (action) {
  try {
    yield put(startSubmit(SIGN_UP_FORM_NAME))

    const response = yield axios.post(`${config.API_ENDPOINT}/users/register/`, action.data)
    const { token } = response.data

    yield put(signUpSuccess())

    // Store user's token in local storage to keep user authenticated
    saveToken(token)

    yield put(signInSuccess({
      token,
      user: response.data,
    }))

    yield put(redirect('/'))
  } catch (error) {
    let errors = formatFormErrors(error.response.data)

    yield put(stopSubmit(SIGN_UP_FORM_NAME, errors))

    yield put(signUpFailure())
  }
}

export default signUp
