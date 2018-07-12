import { combineReducers } from 'redux'
import signUp from './signUp'
import settings from './settings'
import fetch from './fetch'
import forgotPassword from './forgotPassword'
import changePassword from './changePassword'

export default combineReducers({
  signUp,
  settings,
  fetch,
  forgotPassword,
  changePassword,
})
