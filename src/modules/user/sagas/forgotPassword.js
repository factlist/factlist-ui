import { put } from 'redux-saga/effects'
import { stopSubmit, startSubmit } from 'redux-form'
import request from 'utils/request'
import formatFormErrors from 'utils/formatFormErrors'
import { showNotification } from 'modules/notification/actions'
import { closeModal } from 'modules/modal/actions'
import { FORGOT_PASSWORD_FORM } from '../constants'
import { passwordChangeKeySent } from '../actions'

const forgotPassword = function* (action) {
  try {
    const { email } = action

    yield put(startSubmit(FORGOT_PASSWORD_FORM))

    yield request('/auth/reset-password', {
      method: 'post',
      data: {user_identifier: email},
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
      // Generic API error
      yield put(showNotification(`We can't complete your request. Please try again later.`))
      yield put(closeModal())
    }
  }
}

export default forgotPassword
