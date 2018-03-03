import { takeLatest, call, put } from 'redux-saga/effects'
import request from '../../utils/request'
import { FETCH_CLAIMS } from './constants'
import { fetchClaimsFailure, claimsFetched } from './actions'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT
const REQUEST_URL = `${API_ENDPOINT}/v1/claims/`

const fetch = function* () {
  try {
    const claims = yield call(request, REQUEST_URL)
    yield put(claimsFetched(claims))
  } catch (error) {
    yield put(fetchClaimsFailure(error))
  }
}

export default function* () {
  yield takeLatest(FETCH_CLAIMS, fetch)
}
