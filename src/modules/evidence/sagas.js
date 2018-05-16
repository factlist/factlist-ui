import { takeLatest, fork, select, put } from 'redux-saga/effects'
import axios from 'axios'
import config from 'config'
import { ADD_EVIDENCE_REQUEST } from './constants'
import { evidenceAdded, addEvidenceFailure} from './actions'

const addEvidence = function* (action) {
  try {
    const formData = new FormData()
    formData.append('claim', action.claimId)
    formData.append('text', action.payload.text)
    formData.append('status', action.payload.status)
    action.payload.files.map(file => formData.append('files', file))

    const links = action.payload.links.reduce((accumulator, link) => {
      accumulator.push({ link })

      return accumulator
    }, [])

    formData.append('links', JSON.stringify(links))

    // Get current user's token
    const token = yield select(state => state.auth.user.token)

    const requestURL = `${config.API_ENDPOINT}/claims/${action.claimId}/evidences/`
    const response = yield axios.post(requestURL, formData, {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    yield put(evidenceAdded(response.data))
  } catch (error) {
    yield put(addEvidenceFailure(error))
  }
}

// Watchers
const watchAddEvidence = function* () {
  yield takeLatest(ADD_EVIDENCE_REQUEST, addEvidence)
}

export default [
  fork(watchAddEvidence),
]
