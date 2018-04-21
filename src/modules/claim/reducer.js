import {
  FETCH_CLAIM_REQUEST,
  FETCH_CLAIM_SUCCESS,
  FETCH_CLAIM_FAILURE,
  FETCH_ALL_CLAIMS_REQUEST,
  FETCH_ALL_CLAIMS_SUCCESS,
  FETCH_ALL_CLAIMS_FAILURE,
} from './constants'

const initialState = {
  fetching: false,
  error: false,
  all: [], // All claims
  selectedClaim: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLAIM_REQUEST:
      return {
        ...state,
        fetching: true,
        error: false,
      }

    case FETCH_CLAIM_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: false,
        selectedClaim: action.data,
      }

    case FETCH_CLAIM_FAILURE:
      return {
        ...state,
        fetching: false,
        error: true
      }

    case FETCH_ALL_CLAIMS_REQUEST:
      return {
        ...state,
        fetching: true,
        error: false,
      }

    case FETCH_ALL_CLAIMS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: false,
        all: action.claims.data.results,
      }

    case FETCH_ALL_CLAIMS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      }

    default:
      return state
  }
}
