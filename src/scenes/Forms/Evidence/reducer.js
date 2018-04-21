import {
  ADD_EVIDENCE_REQUEST,
  ADD_EVIDENCE_SUCCESS
} from './constants'

const initialState = {
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVIDENCE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ADD_EVIDENCE_SUCCESS:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
