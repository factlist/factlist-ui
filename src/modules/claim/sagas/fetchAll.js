import { put } from 'redux-saga/effects'
import axios from 'axios'
import config from 'config'
import {
  claimsFetched,
  fetchClaimsFailure,
} from '../actions'

const fetchAll = function* (action) {
  try {
    const response = yield axios.get(`${config.API_ENDPOINT}/claims/`)

    yield put(claimsFetched(response))
  } catch (error) {
    yield put(fetchClaimsFailure(error))
  }
}

export default fetchAll
