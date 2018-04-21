import {
  ADD_EVIDENCE_REQUEST,
  ADD_EVIDENCE_SUCCESS,
  ADD_EVIDENCE_FAILURE,
} from './constants'

const initialState = {
  requesting: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVIDENCE_REQUEST:
      return {
        ...state,
        requesting: true,
        error: false,
      }

    case ADD_EVIDENCE_SUCCESS:
      return {
        ...state,
        requesting: false,
        error: false,
      }

    case ADD_EVIDENCE_FAILURE:
      return {
        ...state,
        requesting: false,
        error: true,
      }

    default:
      return state
  }
}
