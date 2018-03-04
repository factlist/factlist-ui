import { takeEvery, put, call } from 'redux-saga/effects'
import { ADD_REPORT_REQUEST } from './constants'
import request from '../../utils/request'
import { reportAdded } from './actions'

const addReport = function* (action) {
  try {
    const formData = new FormData()
    formData.append('text', action.data.text)
    action.data.files.map(file => formData.append('files[]', file))

    const response = yield call(request, 'http://localhost:8000', {
      method: 'POST',
      body: formData
    })

    yield put(reportAdded())
  } catch (error) {
    console.log(error)
    // @TODO Handle exception
  }
}

export default function* () {
  yield takeEvery(ADD_REPORT_REQUEST, addReport)
}
