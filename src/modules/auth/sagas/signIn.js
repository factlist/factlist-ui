import { put } from 'redux-saga/effects'
import { startSubmit, stopSubmit } from 'redux-form'
import request from 'utils/request'
import jwtDecode from 'jwt-decode';
import { push as redirect } from 'react-router-redux'
import { saveToken, saveUser } from 'utils/storage'
import formatFormErrors from 'utils/formatFormErrors'
import { signInSuccess, signInFailure } from '../actions'
import { SIGN_IN_FORM_NAME } from '../constants'
import {getUser} from 'modules/graphql/requests'

const signIn = function* ({ email, password }) {
  try {
    yield put(startSubmit(SIGN_IN_FORM_NAME))

    const response = yield request('/auth/login', {
      method: 'post',
      data: {email, password},
    })

    const { token } = response.data;

    saveToken(token)

    const id = jwtDecode(token).sub;

    const user = yield getUser({id})

    saveUser(user)

    yield put(signInSuccess({token, user }))

    yield put(redirect('/'))
  } catch (error) {
    let errors = error.response ? formatFormErrors(error.response.data) : error

    yield put(stopSubmit(SIGN_IN_FORM_NAME, errors))

    yield put(signInFailure(error))
  }
}

export default signIn;
