import { takeEvery, put, call, select } from 'redux-saga/effects'
import { ADD_REPORT_REQUEST } from './constants'
import request from 'utils/request'
import { reportAdded } from './actions'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT
const REQUEST_URL = `${API_ENDPOINT}/claims/`

const addReport = function* (action) {
  try {
    const { text } = action.data
    const links = text.match(/(https?:\/\/[^\s]+\.[a-z]+)/g) || []

    // Prepare  form data
    const formData = new FormData()
    formData.append('text', text)
    links.map(link => formData.append('links[]', link))
    action.data.files.map(file => formData.append('files[]', file))

    // Get current user's token
    const token = yield select(state => state.global.user.token)

    const response = yield call(request, REQUEST_URL, {
      headers: {
        Authorization: `Token ${token}`
      },
      method: 'POST',
      body: formData
    })

    console.log(response)

    yield put(reportAdded())
  } catch (error) {
    console.log(error)
    // @TODO Handle exception
  }
}

export default function* () {
  yield takeEvery(ADD_REPORT_REQUEST, addReport)
}
