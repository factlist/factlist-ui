import {
  FETCH_CLAIMS_REQUEST,
  FETCH_CLAIMS_SUCCESS,
  FETCH_CLAIMS_FAILURE,

  FETCH_CLAIM_BY_ID_SUCCESS,

  ADD_CLAIM_SUCCESS,
} from '../constants'

import { ADD_EVIDENCE_SUCCESS } from 'modules/evidence/constants'

const initialState = {
  requesting: false,
  error: false,
  all: [],
  count: 0,
  hasMore: true,
  selected: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLAIMS_REQUEST:
      return {
        ...state,
        requesting: true,
      }

    case FETCH_CLAIMS_SUCCESS:
      return {
        ...state,
        requesting: false,
        all: state.all.concat(action.claims),
        count: action.count,
        hasMore: action.hasMore,
      }

    case FETCH_CLAIMS_FAILURE:
      return {
        ...state,
        requesting: false,
        error: true,
      }

    case FETCH_CLAIM_BY_ID_SUCCESS:
      return {
        ...state,
        selected: action.claim,
      }

    case ADD_CLAIM_SUCCESS:
      return {
        ...state,
        all: [
          action.claim,
          ...state.all,
        ]
      }

    case ADD_EVIDENCE_SUCCESS:
      // Update selected claim's status
      const selected = Object.assign({}, state.selected)
      selected[`${action.evidence.conclusion}_count`] += 1

      return {
        ...state,
        selected: {
          ...selected,
          evidences: state.selected.evidences.concat(action.evidence),
        }
      }

    default:
      return state
  }
}
