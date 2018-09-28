import { takeLatest, fork } from 'redux-saga/effects'

import {
  FETCH_TOPICS_REQUEST,
} from '../constants'

// Topic saga handlers
import fetchAll from './fetchAll'

// Watchers
const watchFetchAll = function* () {
  yield takeLatest(FETCH_TOPICS_REQUEST, fetchAll)
}

export default [
  fork(watchFetchAll),
]
