import { combineReducers } from 'redux'
import addClaim from './addClaim'
import fetch from './fetch'

export default combineReducers({
  addClaim,
  fetch,
})
