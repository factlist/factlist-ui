import { fork, takeEvery, put } from 'redux-saga/effects'
import { push as redirect } from 'react-router-redux'
import config from 'config'
import axios from 'axios'
import { FETCH_USER_PROFILE_REQUEST } from './constants'
import { userProfileFetched } from 'modules/profile/actions'

const fetchProfile = function* (action) {
  try {
    const username = action.username

    const user = yield axios.get(`${config.API_ENDPOINT}/users/${username}/`)
    const claims = yield axios.get(`${config.API_ENDPOINT}/claims/?filter=from:${username}`)

    yield put(userProfileFetched({
      user: user.data,
      claims: claims.data.results,
    }))
  } catch (error) {
    if (error.response && error.response.status === 404) {
      yield put(redirect('/404'))
    } else {
      // @TODO Redirect 500
      console.log(error)
    }
  }
}

export const watchFetchProfile = function* () {
  yield takeEvery(FETCH_USER_PROFILE_REQUEST, fetchProfile)
}

export default fork(watchFetchProfile)
