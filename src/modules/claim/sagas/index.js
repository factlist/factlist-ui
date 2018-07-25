import { takeLatest, fork } from 'redux-saga/effects'
import {
  FETCH_CLAIMS_REQUEST,
  FETCH_CLAIM_BY_ID_REQUEST,
  ADD_CLAIM_REQUEST,
} from '../constants'

// Saga handlers
import fetchClaimById from './fetchClaimById'
import fetchClaims from './fetchClaims'
import addClaim from './addClaim'

// Watchers
const watchFetchClaimById = function* () {
  yield takeLatest(FETCH_CLAIM_BY_ID_REQUEST, fetchClaimById)
}

const watchFetchClaims = function* () {
  yield takeLatest(FETCH_CLAIMS_REQUEST, fetchClaims)
}

const watchAddClaim = function* () {
  yield takeLatest(ADD_CLAIM_REQUEST, addClaim)
}

export default [
  fork(watchFetchClaimById),
  fork(watchFetchClaims),
  fork(watchAddClaim),
]
