import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from 'modules/auth/reducer'
import userReducers from 'modules/user/reducers'
import modalReducer from 'modules/modal/reducer'
import notificationReducer from 'modules/notification/reducer'
import embedReducer from 'modules/embed/reducer'
import profileReducer from 'modules/profile/reducer'
import topicReducers from 'modules/topic/reducers'

export default () => combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducers,
  modal: modalReducer,
  notification: notificationReducer,
  embed: embedReducer,
  profile: profileReducer,
  topic: topicReducers,
})
