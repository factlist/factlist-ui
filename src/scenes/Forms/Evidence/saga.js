import { takeLatest, call, put } from 'redux-saga/effects'
import { ADD_EVIDENCE_REQUEST } from './constants'
import request from '../../utils/request'

const addEvidence = function* (action) {
  try {
    const formData = new FormData()
    formData.append('text', action.data.text)
    formData.append('links', action.data.links)
    formData.append('status', action.data.status)
    action.data.files.map(file => formData.append('files[]', file))

    yield call(request, 'http://localhost:8000', {
      method: 'POST',
      body: formData
    })

  } catch (error) {
    // @TODO Handle error
    console.log(error)
  }
}

export default function* () {
  yield takeLatest(ADD_EVIDENCE_REQUEST, addEvidence)
}
