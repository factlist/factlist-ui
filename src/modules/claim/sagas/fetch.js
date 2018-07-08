import { put } from 'redux-saga/effects'
import config from 'config'
import axios from 'axios'
import { push as redirect } from 'react-router-redux'
import { claimFetched } from '../actions'

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

export default fetch
