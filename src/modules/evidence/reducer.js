import {
  ADD_EVIDENCE_REQUEST,
  ADD_EVIDENCE_SUCCESS,
  ADD_EVIDENCE_FAILURE,
  ADD_EVIDENCE_RESET,
} from './constants'

const initialState = {
  requesting: false,
  error: false,
  success: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVIDENCE_REQUEST:
      return {
        ...state,
        requesting: true,
        error: false,
        success: false,
      }

    case ADD_EVIDENCE_SUCCESS:
      return {
        ...state,
        requesting: false,
        error: false,
        success: true,
      }

    case ADD_EVIDENCE_FAILURE:
      return {
        ...state,
        requesting: false,
        error: true,
        success: false,
      }

    case ADD_EVIDENCE_RESET:
      return {
        ...state,
        requesting: false,
        error: false,
        success: false,
      }

    default:
      return state
  }
}
