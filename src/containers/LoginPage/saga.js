import { takeLatest, call, put } from 'redux-saga/effects'
import { USER_AUTH } from './constants'
import { authSuccess, authFailure } from './actions'
import request from '../../utils/request'
import { push } from 'react-router-redux'

const REQUEST_URL = 'http://localhost:8000/api/v1/users/login/'

const auth = function* (action) {
  const { email, password } = action

  try {
    const response = yield call(request, REQUEST_URL, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    })

    localStorage.setItem('user', JSON.stringify({
      token: response.token
    }))

    yield put(authSuccess(response.token))
    yield put(push('/'))
  } catch (error) {
    yield put(authFailure(error))
  }
}

export default function* () {
  yield takeLatest(USER_AUTH, auth)
}
