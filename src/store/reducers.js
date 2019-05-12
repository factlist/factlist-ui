import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from 'modules/auth/reducer'
import userReducers from 'modules/user/reducers'
import embedReducer from 'modules/embed/reducer'
import profileReducer from 'modules/profile/reducer'
import topicReducers from 'modules/topic/reducers'

export default () => combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducers,
  embed: embedReducer,
  profile: profileReducer,
  topic: topicReducers,
})
