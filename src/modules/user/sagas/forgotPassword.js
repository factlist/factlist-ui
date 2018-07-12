import { put } from 'redux-saga/effects'
import { stopSubmit, startSubmit } from 'redux-form'
import config from 'config'
import axios from 'axios'
import formatFormErrors from 'utils/formatFormErrors'
import { FORGOT_PASSWORD_FORM } from '../constants'
import { passwordChangeKeySent } from '../actions'

const forgotPassword = function* (action) {
  try {
    const { email } = action

    yield put(startSubmit(FORGOT_PASSWORD_FORM))

    yield axios.post(`${config.API_ENDPOINT}/users/forgot_password/`, {
      user_identifier: email,
    })

    yield put(stopSubmit(FORGOT_PASSWORD_FORM))
    yield put(passwordChangeKeySent())
  } catch (error) {
    if (error.response && error.response.status === 400) {
      const errors = formatFormErrors(error.response.data)

      if (errors.user_identifier) {
        errors.email = errors.user_identifier
      }

      yield put(stopSubmit(FORGOT_PASSWORD_FORM, errors))
    } else {
      // @TODO Handle generic error
    }
  }
}

export default forgotPassword
