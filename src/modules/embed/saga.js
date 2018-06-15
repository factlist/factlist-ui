import { takeEvery, fork, select, put } from 'redux-saga/effects'
import config from 'config'
import axios from 'axios'
import { FETCH_EMBED_REQUEST } from './constants'
import {
  embedFetched,
  embedFetchFailure,
} from './actions'

const cache = {}

const fetch = function* (action) {
  const { url } = action

  try {
    const token = yield select(state => state.auth.token)

    let response = cache[url]

    if (response === undefined) {
      response = yield axios.get(`${config.API_ENDPOINT}/embed/?link=${url}`, {
        headers: {
          Authorization: `Token ${token}`
        }
      })

      response = response.data
      cache[url] = response
    }

    yield put(embedFetched({ url, data: response }))
  } catch (error) {
    yield put(embedFetchFailure(url))
  }
}

const watch = function* () {
  yield takeEvery(FETCH_EMBED_REQUEST, fetch)
}

export default fork(watch)
