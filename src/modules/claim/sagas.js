import { takeLatest, fork, put, select } from 'redux-saga/effects'
import axios from 'axios'
import { push as redirect } from 'react-router-redux'
import config from 'config'
import {
  FETCH_CLAIM_REQUEST,
  FETCH_ALL_CLAIMS_REQUEST,
  ADD_CLAIM_REQUEST,
} from './constants'
import {
  claimFetched,
  claimsFetched,
  fetchClaimsFailure,
  claimAdded,
  addClaimFailure,
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

const addClaim = function* (action) {
  const { text, links, files } = action.data

  // Prepare  form data
  const formData = new FormData()
  formData.append('text', text)
  formData.append('links', JSON.stringify(links))
  files.map(file => formData.append('files', file))

  try {
    // Get current user's token
    const token = yield select(state => state.auth.user.token)

    // // API request
    const response = yield axios.post(`${config.API_ENDPOINT}/claims/`, formData, {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    yield put(claimAdded(response.data))

    yield put(redirect('/'))
  } catch (error) {
    yield put(addClaimFailure())
  }
}

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
