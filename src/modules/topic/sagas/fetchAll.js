import { put } from 'redux-saga/effects'
import axios from 'axios'
import config from 'config'
import {
  fetchTopicsSuccess,
  fetchTopicsFailure,
} from '../actions'

export default function* () {
  try {
    const response = yield axios.get(`${config.API_ENDPOINT}/topics/`)
    const data = response.data.results

    yield put(fetchTopicsSuccess({
      data,
    }))
  } catch (error) {
    yield put(fetchTopicsFailure(error))
  }
}
