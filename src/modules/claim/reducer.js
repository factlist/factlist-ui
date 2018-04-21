import {
  FETCH_CLAIM_REQUEST,
  FETCH_CLAIM_SUCCESS,
  FETCH_CLAIM_FAILURE,
  FETCH_ALL_CLAIMS_REQUEST,
  FETCH_ALL_CLAIMS_SUCCESS,
  FETCH_ALL_CLAIMS_FAILURE,
  ADD_CLAIM_REQUEST,
  ADD_CLAIM_SUCCESS,
  ADD_CLAIM_FAILURE,
} from './constants'

const initialState = {
  requesting: false,
  error: false,
  all: [], // All claims
  selectedClaim: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLAIM_REQUEST:
      return {
        ...state,
        requesting: true,
        error: false,
      }

    case FETCH_CLAIM_SUCCESS:
      return {
        ...state,
        requesting: false,
        error: false,
        selectedClaim: action.data,
      }

    case FETCH_CLAIM_FAILURE:
      return {
        ...state,
        requesting: false,
        error: true
      }

    case FETCH_ALL_CLAIMS_REQUEST:
      return {
        ...state,
        requesting: true,
        error: false,
      }

    case FETCH_ALL_CLAIMS_SUCCESS:
      return {
        ...state,
        requesting: false,
        error: false,
        all: action.claims.data.results,
      }

    case FETCH_ALL_CLAIMS_FAILURE:
      return {
        ...state,
        requesting: false,
        error: action.error,
      }

    case ADD_CLAIM_REQUEST:
      return state

    case ADD_CLAIM_SUCCESS:
      return {
        ...state,
        all: [
          action.data,
          ...state.all
        ]
      }

    case ADD_CLAIM_FAILURE:
      return state

    default:
      return state
  }
}
