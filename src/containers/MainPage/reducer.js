import {
  FETCH_CLAIMS,
  FETCH_CLAIMS_SUCCESS,
  FETCH_CLAIMS_FAILURE
} from './constants'

const initialState = {
  loading: false,
  error: false,
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLAIMS:
      return {
        ...state,
        loading: true,
        error: false
      }
    case FETCH_CLAIMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.claims
      }
    case FETCH_CLAIMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}
