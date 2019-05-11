import request from 'utils/request'
import {notification} from 'store/unstated'

const signInWithTwitter = function* () {
  try {
    // Token request with email & password
    const response = yield request('/auth/twitter')
    const redirectURL = response.data.redirect_link

    // Redirect to Twitter
    window.top.location = redirectURL
  } catch (error) {
    notification.show(
      'We can\'t authenticate you with Twitter right now, please try again later.'
    )
  }
}

export default signInWithTwitter
