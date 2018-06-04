import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from '../constants'

const initialState = {
  requesting: false,
  success: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        requesting: true,
      }

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
      }

    case UPDATE_USER_FAILURE:
      return {
        requesting: false,
        success: false,
        error: true,
      }

    default:
      return state
  }
}
