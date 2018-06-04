import { combineReducers } from 'redux'
import signUp from './signUp'
import settings from './settings'
import fetch from './fetch'

export default combineReducers({
  signUp,
  settings,
  fetch,
})
