import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST
} from './constants'

const userStorage = localStorage.getItem('user')

const initialState = {
  user: userStorage ? JSON.parse(userStorage) : null,
  authenticating: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        authenticating: true,
        error: false
      }

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        authenticating: false,
        error: false,
        user: {
          token: action.token
        }
      }

    case SIGN_IN_FAILURE:
      return {
        ...state,
        authenticating: false,
        error: action.error
      }

    case SIGN_OUT_REQUEST:
      return {
        ...state,
        user: null,
      }

    default:
      return state
  }
}
