import { put } from 'redux-saga/effects'
import {
  fetchTopicsSuccess,
  fetchTopicsFailure,
} from '../actions'
import client from 'modules/graphql';
import { GET_ALL_TOPICS } from 'modules/graphql/queries/topic';

export default function* () {
  try {
    const { data } = yield client.query({
      query: GET_ALL_TOPICS
    })
    yield put(fetchTopicsSuccess({
      data: data.topics,
    }))
  } catch (error) {
    yield put(fetchTopicsFailure(error))
  }
}
