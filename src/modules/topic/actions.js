import {
  FETCH_TOPICS_REQUEST,
  FETCH_TOPICS_SUCCESS,
  FETCH_TOPICS_FAILURE,
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
