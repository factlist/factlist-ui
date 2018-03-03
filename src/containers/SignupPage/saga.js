import { takeLatest, call, put } from 'redux-saga/effects'
import { USER_SIGN_UP } from './constants'
import { signUpSuccess, signUpFailure } from './actions'
import request from '../../utils/request'
import { push } from 'react-router-redux'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT
const REQUEST_URL = `${API_ENDPOINT}/v1/users/register/`

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
