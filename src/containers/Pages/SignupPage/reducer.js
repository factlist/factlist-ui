import {
  USER_SIGN_UP,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_FAILURE
} from './constants'

const initialState = {
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_UP:
      return {
        ...state,
        loading: true,
        error: false
      }
    case USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false
      }
    case USER_SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}
