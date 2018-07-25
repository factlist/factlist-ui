import {
  ADD_CLAIM_REQUEST,
  ADD_CLAIM_SUCCESS,
  ADD_CLAIM_FAILURE,
} from '../constants'

const initialState = {
  requesting: false,
  success: false,
  error: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLAIM_REQUEST:
      return {
        ...state,
        requesting: true,
      }

    case ADD_CLAIM_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
      }

    case ADD_CLAIM_FAILURE:
      return {
        ...state,
        requesting: false,
        error: true,
      }

    default:
      return state
  }
}
