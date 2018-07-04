import {
  FILE_UPLOAD_REQUEST,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAILURE,
  REMOVE_FILE_REQUEST,
} from './constants'

const initialState = {
  all: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FILE_UPLOAD_REQUEST:
      return {
        ...state,
        all: [
          ...state.all,
          {
            source: action.file,
            requesting: false,
          }
        ]
      }

    case FILE_UPLOAD_SUCCESS:
      return {
        ...state,
        all: state.all.map(file => {
          if (file.source === action.file) {
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
        all: state.all.map(file => {
          if (file === action.file) {
            file.success = false
          }

          return file
        })
      }

    case REMOVE_FILE_REQUEST:
      return {
        ...state,
        all: state.all.filter(file => file.source !== action.file.source)
      }

    default:
      return state
  }
}
