import { combineReducers } from 'redux'
import globalReducer from 'modules/global/reducer'
import authReducer from 'modules/auth/reducer'
import userReducer from 'modules/user/reducer'
import claimReducer from 'modules/claim/reducer'
import evidenceReducer from 'modules/evidence/reducer'
import modalReducer from 'modules/modal/reducer'

export default () => combineReducers({
  global: globalReducer,
  auth: authReducer,
  user: userReducer,
  claim: claimReducer,
  evidence: evidenceReducer,
  modal: modalReducer,
})
