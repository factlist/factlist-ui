import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
} from './constants'

const initialState = {
  requesting: false,
  user: null,
  claims: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_REQUEST:
      return {
        ...state,
        requesting: true,
      }

    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        requesting: false,
        user: action.user,
        claims: action.claims,
      }

    case FETCH_USER_PROFILE_FAILURE:
      return {
        ...state,
        requesting: false,
      }

    default:
      return state
  }
}
