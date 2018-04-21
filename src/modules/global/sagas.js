import { takeLatest, fork, select } from 'redux-saga/effects'
import { TOGGLE_TIMEAGO_FORMAT } from './constants'

const toggleTimeago = function* () {
  const timeago = yield select(state => state.global.timeago)

  if (!timeago) {
    localStorage.removeItem('timeago')
  } else {
    localStorage.setItem('timeago', true)
  }
}

// Watchers
const watchTimeago = function* () {
  yield takeLatest(TOGGLE_TIMEAGO_FORMAT, toggleTimeago)
}

export default [
  fork(watchTimeago),
]
