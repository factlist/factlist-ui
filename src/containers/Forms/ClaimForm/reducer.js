import {
  ADD_REPORT_REQUEST,
  ADD_REPORT_SUCCESS
} from './constants'

const initialState = {
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_REPORT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ADD_REPORT_SUCCESS:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
