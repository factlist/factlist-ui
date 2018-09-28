import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from 'modules/auth/reducer'
import userReducers from 'modules/user/reducers'
import claimReducers from 'modules/claim/reducers'
import evidenceReducer from 'modules/evidence/reducer'
import modalReducer from 'modules/modal/reducer'
import notificationReducer from 'modules/notification/reducer'
import embedReducer from 'modules/embed/reducer'
import fileReducer from 'modules/file/reducer'
import profileReducer from 'modules/profile/reducer'
import topicReducer from 'modules/topic/reducer'

export default () => combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducers,
  claim: claimReducers,
  evidence: evidenceReducer,
  modal: modalReducer,
  notification: notificationReducer,
  embed: embedReducer,
  file: fileReducer,
  profile: profileReducer,
  topic: topicReducer,
})
