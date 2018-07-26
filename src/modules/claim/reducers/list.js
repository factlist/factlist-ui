import {
  FETCH_CLAIMS_REQUEST,
  FETCH_CLAIMS_SUCCESS,
  FETCH_CLAIMS_FAILURE,
  ADD_CLAIM_SUCCESS,
} from '../constants'

import {
  ADD_EVIDENCE_SUCCESS,
} from 'modules/evidence/constants'

const initialState = {
  requesting: false,
  data: [],
  count: 0,
  hasMore: true,
  error: false,
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
        data: state.data.concat(action.claims),
        count: action.count,
        hasMore: action.hasMore,
      }

    case FETCH_CLAIMS_FAILURE:
      return {
        ...state,
        requesting: false,
        error: true,
      }

    case ADD_CLAIM_SUCCESS:
      return {
        ...state,
        data: [
          action.claim,
          ...state.data,
        ]
      }

    case ADD_EVIDENCE_SUCCESS:
      return {
        ...state,
        data: state.data.map(claim => {
          if (claim.id === action.claimId) {
            claim[`${action.evidence.conclusion}_count`] += 1
          }

          return claim
        })
      }

    default:
      return state
  }
}
