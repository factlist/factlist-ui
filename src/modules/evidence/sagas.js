import { takeLatest, fork, select, put } from 'redux-saga/effects'
import axios from 'axios'
import config from 'config'
import { stopSubmit, startSubmit } from 'redux-form'
import formatFormErrors from 'utils/formatFormErrors'
import { showNotification } from 'modules/notification/actions'
import { ADD_EVIDENCE_REQUEST, EVIDENCE_FORM } from './constants'
import { evidenceAdded, addEvidenceFailure} from './actions'

const addEvidence = function* (action) {
  try {
    const { claimId } = action

    yield put(startSubmit(EVIDENCE_FORM))

    let files = yield select(state => state.file.evidence)
    files = files
      .filter(file => file.success === true)
      .map(file => file.id)

    let links = yield select(state => state.embed.evidence)
    links = links.map(link => link.url)

    // Prepare request data
    const requestPayload = {
      claim: claimId,
      links,
      files,
      ...action.payload,
    }

    // Get current user's token
    const token = yield select(state => state.auth.token)

    const requestURL = `${config.API_ENDPOINT}/claims/${claimId}/evidences/`
    const response = yield axios.post(requestURL, requestPayload, {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    yield put(evidenceAdded({
      claimId,
      evidence: response.data,
    }))

    yield put(stopSubmit(EVIDENCE_FORM))
  } catch (error) {

    if (error.response.status === 400) {
      const errors = formatFormErrors(error.response.data)

      if (!errors.text && (errors.files || errors.links)) {
        errors.text = errors.files || errors.links
      }

      yield put(stopSubmit(EVIDENCE_FORM, errors))
    } else {
      // Generic API error
      yield put(showNotification(`We can't add your evidence right now, please try again later.`))
    }

    yield put(addEvidenceFailure())
  }
}

// Watchers
const watchAddEvidence = function* () {
  yield takeLatest(ADD_EVIDENCE_REQUEST, addEvidence)
}

export default [
  fork(watchAddEvidence),
]
