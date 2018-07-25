import { put } from 'redux-saga/effects'
import axios from 'axios'
import config from 'config'
import {
  fetchClaimsSuccess,
  fetchClaimsFailure,
} from '../actions'

const LIMIT = 25

const fetchClaims = function* (action) {
  try {
    const { page } = action
    const offset = LIMIT * (page - 1)
    const response = yield axios.get(`${config.API_ENDPOINT}/claims/?limit=${LIMIT}&offset=${offset}`)
    const data = response.data

    yield put(fetchClaimsSuccess({
      claims: data.results,
      count: data.count,
      hasMore: data.next ? true : false,
    }))
  } catch (error) {
    yield put(fetchClaimsFailure(error))
  }
}

export default fetchClaims
