import {
  FETCH_TOPICS_REQUEST,
  FETCH_TOPICS_SUCCESS,
  FETCH_TOPICS_FAILURE,
  UPDATE_TOPIC_TITLE,
} from './constants'

export const fetchTopicsRequest = () => ({
  type: FETCH_TOPICS_REQUEST,
})

export const fetchTopicsSuccess = ({ data }) => ({
  type: FETCH_TOPICS_SUCCESS,
  data,
})

export const fetchTopicsFailure = (error) => ({
  type: FETCH_TOPICS_FAILURE,
  error,
})

export const updateTopicTitle = ({ id, title }) => ({
  type: UPDATE_TOPIC_TITLE,
  id,
  title,
})
