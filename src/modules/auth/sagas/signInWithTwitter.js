import { put } from 'redux-saga/effects'
import config from 'config'
import axios from 'axios'
import { showNotification } from 'modules/notification/actions'
import { closeModal } from 'modules/modal/actions'

const signInWithTwitter = function* () {
  try {
    // Token request with email & password
    const response = yield axios.get(`${config.API_ENDPOINT}/users/auth/twitter/`)
    const redirectURL = response.data.redirect_link

    // Redirect to Twitter
    window.top.location = redirectURL
  } catch (error) {
    yield put(showNotification(`We can't authenticate you with Twitter right now, please try again later.`))
    yield put(closeModal())
  }
}

export default signInWithTwitter
