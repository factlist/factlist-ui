import { put } from 'redux-saga/effects'
import config from 'config'
import axios from 'axios'
import { push as redirect } from 'react-router-redux'
import {
  fetchClaimByIdSuccess,
  fetchClaimByIdFailure,
} from '../actions'

const fetchClaimById = function* (action) {
  try {
    const response = yield axios.get(`${config.API_ENDPOINT}/claims/${action.id}/`)

    yield put(fetchClaimByIdSuccess(response.data))
  } catch (error) {
    if (error.response.status === 404) {
      return yield put(redirect('/404'))
    }

    yield put(fetchClaimByIdFailure(error))
  }
}

export default fetchClaimById
