import { fork, takeEvery, put } from 'redux-saga/effects'
import { push as redirect } from 'react-router-redux'
import { userProfileFetched } from 'modules/profile/actions'

import { FETCH_USER_PROFILE_REQUEST } from './constants'

const fetchProfile = function* (action) {
  throw new Error('Unimplemented feature: fetchProfile.')
  // TODO: The API needs to be updated to accept the username parameter.

  // try {
  //   const username = action.username
  //   const user = yield getUserByUsername({username})

  //   yield put(userProfileFetched({user}))
  // } catch (error) {
  //   if (error.response && error.response.status === 404) {
  //     yield put(redirect('/404'))
  //   } else {
  //     // @TODO Redirect 500
  //     console.log(error)
  //   }
  // }
}

export const watchFetchProfile = function* () {
  yield takeEvery(FETCH_USER_PROFILE_REQUEST, fetchProfile)
}

export default fork(watchFetchProfile)
