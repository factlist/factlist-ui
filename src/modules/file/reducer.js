import {
  FILE_UPLOAD_REQUEST,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAILURE,
  REMOVE_FILE_REQUEST,
  RESET_CLAIM_FILES,
  RESET_EVIDENCE_FILES,
} from './constants'

const initialState = {
  claim: [],
  evidence: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FILE_UPLOAD_REQUEST:
      return {
        ...state,
        [action.form]: [
          ...state[action.form],
          {
            source: action.file,
            requesting: true,
          }
        ]
      }

    case FILE_UPLOAD_SUCCESS:
      return {
        ...state,
        [action.form]: state[action.form].map(file => {
          if (file.source === action.file) {
            file.requesting = false
            file.success = true
            file.id = action.id
            file.url = action.url
          }

          return file
        })
      }

    case FILE_UPLOAD_FAILURE:
      return {
        ...state,
        [action.form]: state[action.form].map(file => {
          if (file === action.file) {
            file.requesting = false
            file.success = false
          }

          return file
        })
      }

    case REMOVE_FILE_REQUEST:
      return {
        ...state,
        [action.form]: state[action.form].filter(file => file.source !== action.file.source)
      }

    case RESET_CLAIM_FILES:
      return {
        ...state,
        claim: [],
      }

    case RESET_EVIDENCE_FILES:
      return {
        ...state,
        evidence: [],
      }

    default:
      return state
  }
}
