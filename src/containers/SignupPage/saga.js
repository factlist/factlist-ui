import { takeLatest, call, put } from 'redux-saga/effects'
import { USER_SIGN_UP } from './constants'
import { signUpSuccess, signUpFailure } from './actions'
import request from '../../utils/request'
import { push } from 'react-router-redux'

const REQUEST_URL = 'http://localhost:8884/api/register'

const signUp = function* (action) {
  try {
    yield call(request, REQUEST_URL, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(action.data)
    })

    yield put(signUpSuccess())
    yield put(push('/login'))
  } catch (error) {
    yield put(signUpFailure(error))
  }
}

export default function* () {
  yield takeLatest(USER_SIGN_UP, signUp)
}
