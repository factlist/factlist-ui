import config from 'config'
import axios from 'axios'

const signInWithTwitter = function* () {
  try {
    // Token request with email & password
    const response = yield axios.get(`${config.API_ENDPOINT}/users/auth/twitter/`)
    const redirectURL = response.data.redirect_link

    window.top.location = redirectURL
  } catch (error) {
    // @TODO Handle error
  }
}

export default signInWithTwitter
