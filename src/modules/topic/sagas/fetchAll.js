import { put } from 'redux-saga/effects'
import {
  fetchTopicsSuccess,
  fetchTopicsFailure,
} from '../actions'
import client from 'modules/graphql';
import {getAllTopics} from 'modules/graphql/requests'

export default function* () {
  try {
    const topics = yield getAllTopics()

    yield put(fetchTopicsSuccess({data: topics}))
  } catch (error) {
    yield put(fetchTopicsFailure(error))
  }
}
