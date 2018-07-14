import { put } from 'redux-saga/effects'
import config from 'config'
import axios from 'axios'
import { push as redirect } from 'react-router-redux'
import { userFetched } from 'modules/user/actions'
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

    yield put(signInSuccess({ token }))

    // Store user's token in local storage to keep user authenticated
    saveToken(token)

    yield put(userFetched(response.data))

    yield put(redirect('/'))
  } catch (error) {
    // @TODO Handle error
  }
}

export default signInWithToken
