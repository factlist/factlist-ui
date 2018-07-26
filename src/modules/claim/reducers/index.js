import { combineReducers } from 'redux'
import addClaim from './addClaim'
import list from './list'
import detail from './detail'

export default combineReducers({
  addClaim,
  list,
  detail,
})
