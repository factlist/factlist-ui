import { all } from 'redux-saga/effects'
import authSagas from 'modules/auth/sagas'
import userSagas from 'modules/user/sagas'
import embedSaga from 'modules/embed/saga'
import profileSaga from 'modules/profile/saga'
import topicSagas from 'modules/topic/sagas'

export default function* sagas() {
  yield all([
    ...authSagas,
    ...userSagas,
    ...topicSagas,
    embedSaga,
    profileSaga,
  ])
}
