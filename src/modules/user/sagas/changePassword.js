import { put } from 'redux-saga/effects'
import { startSubmit, stopSubmit } from 'redux-form'
import config from 'config'
import axios from 'axios'
import formatFormErrors from 'utils/formatFormErrors'
import { CHANGE_PASSWORD_FORM } from '../constants'
import { passwordChanged } from '../actions'

const changePassword = function* (action) {
  const { changeKey, password } = action

  try {
    yield put(startSubmit(CHANGE_PASSWORD_FORM))

    yield axios.post(`${config.API_ENDPOINT}/users/change_password/`, {
      key: changeKey,
      password,
    })

    yield put(stopSubmit(CHANGE_PASSWORD_FORM))

    yield put(passwordChanged())
  } catch (error) {
    if (error.response && error.response.data) {
      const errors = formatFormErrors(error.response.data)

      if (errors.key) {
        errors.password = errors.key
      }

      yield put(stopSubmit(CHANGE_PASSWORD_FORM, errors))
    } else {
      // @TODO Handle generic error
    }
  }
}

export default changePassword
