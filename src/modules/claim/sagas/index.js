import { takeLatest, fork } from 'redux-saga/effects'
import {
  FETCH_CLAIM_REQUEST,
  FETCH_ALL_CLAIMS_REQUEST,
  ADD_CLAIM_REQUEST,
} from '../constants'

// Saga handlers
import fetch from './fetch'
import fetchAll from './fetchAll'
import addClaim from './addClaim'

// Watchers
const watchFetch = function* () {
  yield takeLatest(FETCH_CLAIM_REQUEST, fetch)
}

const watchFetchAll = function* () {
  yield takeLatest(FETCH_ALL_CLAIMS_REQUEST, fetchAll)
}

const watchAddClaim = function* () {
  yield takeLatest(ADD_CLAIM_REQUEST, addClaim)
}

export default [
  fork(watchFetch),
  fork(watchFetchAll),
  fork(watchAddClaim),
]
