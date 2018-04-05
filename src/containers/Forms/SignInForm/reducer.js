import {
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAILURE,
} from './constants'

const initialState = {
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      }

    case USER_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false
      }

    case USER_AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state
  }
}
