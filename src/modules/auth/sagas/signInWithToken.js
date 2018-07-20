import { put } from 'redux-saga/effects'
import config from 'config'
import axios from 'axios'
import { push as redirect } from 'react-router-redux'
import { showNotification } from 'modules/notification/actions'
import { saveToken } from 'utils/storage'
import { signInSuccess } from '../actions'

const signInWithToken = function* ({ token }) {
  try {
    // Get user's info with token
    const response = yield axios.get(`${config.API_ENDPOINT}/users/me/`, {
      headers: {
        Authorization: `Token ${token}`,
      }
    })

    yield put(signInSuccess({
      token,
      user: response.data,
    }))

    // Store user's token in local storage to keep user authenticated
    saveToken(token)

    yield put(redirect('/'))
  } catch (error) {
    yield put(showNotification(`Sorry, we couldn't authenticate. Please try again later.`))
  }
}

export default signInWithToken
