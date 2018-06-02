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

import {
  ADD_EVIDENCE_SUCCESS
} from 'modules/evidence/constants'

const initialState = {
  fetching: false,
  fetchingError: null,
  adding: false,
  addingError: null,
  all: [], // All claims
  selectedClaim: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLAIM_REQUEST:
      return {
        ...state,
        fetching: true,
        fetchingError: false,
      }

    case FETCH_CLAIM_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetchingError: false,
        selectedClaim: action.data,
      }

    case FETCH_CLAIM_FAILURE:
      return {
        ...state,
        fetchingError: false,
        error: true
      }

    case FETCH_ALL_CLAIMS_REQUEST:
      return {
        ...state,
        fetching: true,
        fetchingError: false,
      }

    case FETCH_ALL_CLAIMS_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetchingError: false,
        all: action.claims.data.results,
      }

    case FETCH_ALL_CLAIMS_FAILURE:
      return {
        ...state,
        fetching: false,
        fetchingError: action.error,
      }

    case ADD_CLAIM_REQUEST:
      return {
        ...state,
        adding: true,
      }

    case ADD_CLAIM_SUCCESS:
      return {
        ...state,
        adding: false,
        addingError: false,
        all: [
          action.data,
          ...state.all
        ]
      }

    case ADD_CLAIM_FAILURE:
      return {
        ...state,
        adding: false,
        addingError: false,
      }

    case ADD_EVIDENCE_SUCCESS:
      // Update selected claim's status
      const selectedClaim = state.selectedClaim
      selectedClaim[`${action.evidence.status}_count`] += 1

      return {
        ...state,
        selectedClaim: {
          ...state.selectedClaim,
          evidences: state.selectedClaim.evidences.concat(action.evidence),
        }
      }

    default:
      return state
  }
}
