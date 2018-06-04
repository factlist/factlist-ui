import { select, put } from 'redux-saga/effects'
import axios from 'axios'
import config from 'config'
import { userFetched } from '../actions'

const fetch = function* (action) {
  try {
    const token = yield select(state => state.auth.token)

    const response = yield axios.get(`${config.API_ENDPOINT}/users/me/`, {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    yield put(userFetched(response.data))
  } catch (error) {
    // @TODO Handle server error & redirect 500
    console.log(error)
  }
}

export default fetch
