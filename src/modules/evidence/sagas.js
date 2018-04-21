import { takeLatest, fork, select, put } from 'redux-saga/effects'
import axios from 'axios'
import config from 'config'
import { ADD_EVIDENCE_REQUEST } from './constants'
import { evidenceAdded, addEvidenceFailure } from './actions'

const addEvidence = function* (action) {
  try {
    const formData = new FormData()
    formData.append('claim', action.claimId)
    formData.append('text', action.payload.text)
    formData.append('links', action.payload.links)
    formData.append('status', action.payload.status)
    action.payload.files.map(file => formData.append('files', file))

    // Get current user's token
    const token = yield select(state => state.auth.user.token)

    const requestURL = `${config.API_ENDPOINT}/claims/${action.claimId}/evidences/`
    const response = yield axios.post(requestURL, formData, {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    console.log(response)
  } catch (error) {
    // @TODO Handle error
    console.log(`Evidence couldn't added.`)
  }
}

// Watchers
const watchAddEvidence = function* () {
  yield takeLatest(ADD_EVIDENCE_REQUEST, addEvidence)
}

export default [
  fork(watchAddEvidence),
]
