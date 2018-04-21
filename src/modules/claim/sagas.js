import { takeLatest, fork, put } from 'redux-saga/effects'
import axios from 'axios'
import config from 'config'
import { FETCH_CLAIMS_REQUEST } from './constants'
import { claimsFetched, fetchClaimsFailure } from './actions'

const fetch = function* (action) {
  try {
    const response = yield axios.get(`${config.API_ENDPOINT}/claims/`)

    yield put(claimsFetched(response))
  } catch (error) {
    yield put(fetchClaimsFailure(error))
  }
}

const watchFetch = function* () {
  yield takeLatest(FETCH_CLAIMS_REQUEST, fetch)
}

export default [
  fork(watchFetch),
]
