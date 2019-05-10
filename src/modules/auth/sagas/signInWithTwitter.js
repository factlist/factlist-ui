import { put } from 'redux-saga/effects'
import request from 'utils/request'
import { showNotification } from 'modules/notification/actions'

const signInWithTwitter = function* () {
  try {
    // Token request with email & password
    const response = yield request('/auth/twitter')
    const redirectURL = response.data.redirect_link

    // Redirect to Twitter
    window.top.location = redirectURL
  } catch (error) {
    yield put(showNotification(`We can't authenticate you with Twitter right now, please try again later.`))
  }
}

export default signInWithTwitter
