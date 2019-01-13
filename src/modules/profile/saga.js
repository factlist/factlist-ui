import { fork, takeEvery, put } from 'redux-saga/effects'
import { push as redirect } from 'react-router-redux'
import { userProfileFetched } from 'modules/profile/actions'

import { FETCH_USER_PROFILE_REQUEST } from './constants'
import client from '../../graphql';
import GET_USER from '../../graphql/queries/user';

const fetchProfile = function* (action) {
  try {
    const username = action.username
    const { data } = yield client.query({
      query: GET_USER,
      variables: { username } // Update API to accept username parameter
    });
    yield put(userProfileFetched({
      user: data.user,
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
