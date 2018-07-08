import { takeEvery, fork, select, put, call, all } from 'redux-saga/effects'
import config from 'config'
import axios from 'axios'
import { FETCH_EMBED_REQUEST } from './constants'
import {
  embedFetched,
  embedFetchFailure,
} from './actions'

const fetch = function* (id, url) {
  const cache = yield select(state => state.embed.cache)

  if (cache[url]) {
    return
  }

  try {
    const token = yield select(state => state.auth.token)

    const { data } = yield axios.get(`${config.API_ENDPOINT}/embed/?link=${url}`, {
      headers: {
        Authorization: `Token ${token}`,
      }
    })

    yield put(embedFetched({ id, url, data }))
  } catch (error) {
    yield put(embedFetchFailure({ id, url }))
  }
}

const fetchAll = function* (action) {
  const { id, urls } = action

  yield all(urls.map(url => call(fetch, id, url)))
}

const watch = function* () {
  yield takeEvery(FETCH_EMBED_REQUEST, fetchAll)
}

export default fork(watch)
