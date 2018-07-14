import { select, put } from 'redux-saga/effects'
import { startSubmit, stopSubmit } from 'redux-form'
import config from 'config'
import axios from 'axios'
import { push as redirect } from 'react-router-redux'
import formatFormErrors from 'utils/formatFormErrors'
import { showNotification } from 'modules/notification/actions'
import { closeModal } from 'modules/modal/actions'
import { CLAIM_FORM } from '../constants'
import {
  claimAdded,
  addClaimFailure,
} from '../actions'

const addClaim = function* (action) {
  const { text } = action.data

  let files = yield select(state => state.file.claim)
  files = files
    .filter(file => file.success === true)
    .map(file => file.id)

  let links = yield select(state => state.embed.claim)
  links = links.map(link => link.url)

  // Prepare request data
  const requestPayload = {
    links,
    files,
    text,
  }

  try {
    yield put(startSubmit(CLAIM_FORM))

    // Get current user's token
    const token = yield select(state => state.auth.token)

    // API request
    const response = yield axios.post(`${config.API_ENDPOINT}/claims/`, requestPayload, {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    yield put(claimAdded(response.data))

    yield put(redirect('/'))

    yield put(stopSubmit(CLAIM_FORM))
  } catch (error) {
    if (error.response.status === 400) {
      const errors = formatFormErrors(error.response.data)

      if (!errors.text && (errors.files || errors.links)) {
        errors.text = errors.files || errors.links
      }

      yield put(stopSubmit(CLAIM_FORM, errors))
    } else {
      yield put(showNotification(`We can't add your claim for now. Please try again later.`))
      yield put(closeModal())
    }

    yield put(addClaimFailure())
  }
}

export default addClaim
