import {
  FETCH_CLAIM_REQUEST,
  FETCH_CLAIM_SUCCESS,
  FETCH_CLAIM_FAILURE,
  FETCH_ALL_CLAIMS_REQUEST,
  FETCH_ALL_CLAIMS_SUCCESS,
  FETCH_ALL_CLAIMS_FAILURE,
  ADD_CLAIM_SUCCESS,
  RESET_ADD_CLAIM_STATES,
} from './constants'

import {
  ADD_EVIDENCE_SUCCESS
} from 'modules/evidence/constants'

const initialState = {
  fetching: false,
  fetchingError: null,
  all: [], // All claims
  selectedClaim: null,
  added: false,
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

    case ADD_CLAIM_SUCCESS:
      return {
        ...state,
        added: true,
        all: [
          action.data,
          ...state.all
        ]
      }

    case ADD_EVIDENCE_SUCCESS:
      // Update selected claim's status
      const selectedClaim = state.selectedClaim
      selectedClaim[`${action.evidence.conclusion}_count`] += 1

      return {
        ...state,
        selectedClaim: {
          ...state.selectedClaim,
          evidences: state.selectedClaim.evidences.concat(action.evidence),
        }
      }

    case RESET_ADD_CLAIM_STATES:
      return {
        ...state,
        added: false,
      }

    default:
      return state
  }
}
