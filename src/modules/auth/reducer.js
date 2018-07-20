import { getToken } from 'utils/storage'
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_IN_WITH_TOKEN,
} from './constants'

const token = getToken()

const initialState = {
  token: token ? token : null,
  user: null,
  authenticating: false,
  error: false,
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
        token: action.token,
        user: action.user,
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
        token: null,
      }

    case SIGN_IN_WITH_TOKEN:
      return {
        ...state,
        authenticating: true,
      }

    default:
      return state
  }
}
