import {
  FETCH_CLAIMS_REQUEST,
  FETCH_CLAIMS_SUCCESS,
  FETCH_CLAIMS_FAILURE
} from './constants'

const initialState = {
  fetching: false,
  error: false,
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLAIMS_REQUEST:
      return {
        ...state,
        fetching: true,
        error: false
      }

    case FETCH_CLAIMS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: false,
        data: action.claims.data.results
      }

    case FETCH_CLAIMS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error
      }

    default:
      return state
  }
}
