import { all } from 'redux-saga/effects'
import authSagas from 'modules/auth/sagas'
import claimSagas from 'modules/claim/sagas'
import evidenceSagas from 'modules/evidence/sagas'
import userSagas from 'modules/user/sagas'
import embedSaga from 'modules/embed/saga'

export default function* sagas() {
  yield all([
    ...authSagas,
    ...claimSagas,
    ...userSagas,
    ...evidenceSagas,
    embedSaga,
  ])
}
