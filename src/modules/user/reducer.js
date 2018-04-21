import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from './constants'

const initialState = {
  loading: false,
  error: false,
  registered: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      }

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        registered: true,
      }

    case SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        registered: false,
      }

    default:
      return state
  }
}
