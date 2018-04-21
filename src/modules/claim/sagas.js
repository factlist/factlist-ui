import { takeLatest, fork, put } from 'redux-saga/effects'
import axios from 'axios'
import { push as redirect } from 'react-router-redux'
import config from 'config'
import {
  FETCH_CLAIM_REQUEST,
  FETCH_ALL_CLAIMS_REQUEST,
} from './constants'
import {
  claimFetched,
  claimsFetched,
  fetchClaimsFailure,
} from './actions'

// Saga handlers
const fetch = function* (action) {
  try {
    const response = yield axios.get(`${config.API_ENDPOINT}/claims/${action.id}/`)

    yield put(claimFetched(response.data))
  } catch (error) {
    if (error.response.status === 404) {
      return yield put(redirect('/404'))
    }
  }
}

const fetchAll = function* (action) {
  try {
    const response = yield axios.get(`${config.API_ENDPOINT}/claims/`)

    yield put(claimsFetched(response))
  } catch (error) {
    yield put(fetchClaimsFailure(error))
  }
}

// Watchers
const watchFetch = function* () {
  yield takeLatest(FETCH_CLAIM_REQUEST, fetch)
}

const watchFetchAll = function* () {
  yield takeLatest(FETCH_ALL_CLAIMS_REQUEST, fetchAll)
}

export default [
  fork(watchFetch),
  fork(watchFetchAll),
]
