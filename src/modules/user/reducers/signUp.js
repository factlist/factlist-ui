import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from '../constants'

const initialState = {
  requesting: false,
  success: false,
  error: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        requesting: true,
        error: false,
      }

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        error: false,
      }

    case SIGN_UP_FAILURE:
      return {
        ...state,
        requesting: false,
        success: false,
        error: true,
      }

    default:
      return state
  }
}
