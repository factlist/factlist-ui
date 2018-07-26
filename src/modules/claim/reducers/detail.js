import {
  FETCH_CLAIM_BY_ID_REQUEST,
  FETCH_CLAIM_BY_ID_SUCCESS,
  FETCH_CLAIM_BY_ID_FAILURE,
} from '../constants'

import {
  ADD_EVIDENCE_SUCCESS,
} from 'modules/evidence/constants'

const initialState = {
  requesting: true,
  data: null,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLAIM_BY_ID_REQUEST:
      return {
        ...state,
        requesting: true,
      }

    case FETCH_CLAIM_BY_ID_SUCCESS:
      return {
        ...state,
        requesting: false,
        data: action.claim,
      }

    case FETCH_CLAIM_BY_ID_FAILURE:
      return {
        ...state,
        requesting: false,
        error: true,
      }

    case ADD_EVIDENCE_SUCCESS:
      const conclusionKey = `${action.evidence.conclusion}_count`

      return {
        ...state,
        data: {
          ...state.data,
          [conclusionKey]: state.data[conclusionKey] + 1,
          evidences: state.data.evidences.concat(action.evidence),
        }
      }

    default:
      return state
  }
}
