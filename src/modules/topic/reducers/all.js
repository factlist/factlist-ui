import {
  FETCH_TOPICS_REQUEST,
  FETCH_TOPICS_SUCCESS,
  FETCH_TOPICS_FAILURE,
} from '../constants'

const initialState = {
  requesting: false,
  data: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOPICS_REQUEST:
      return {
        ...state,
        requesting: true,
      }

    case FETCH_TOPICS_SUCCESS:
      return {
        ...state,
        requesting: false,
        data: action.data,
      }

    case FETCH_TOPICS_FAILURE:
      return {
        ...state,
        requesting: false,
        error: action.error,
      }

    default:
      return state
  }
}

