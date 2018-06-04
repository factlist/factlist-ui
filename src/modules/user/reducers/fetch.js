import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from '../constants'

const initialState = {
  requesting: false,
  success: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        requesting: true,
      }

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
      }

    case FETCH_USER_FAILURE:
      return {
        ...state,
        requesting: false,
        error: true,
      }

    default:
      return state
  }
}
