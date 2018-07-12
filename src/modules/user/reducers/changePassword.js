import {
  CHANGE_PASSWORD_SUCCESS,
} from '../constants'

const initialState = {
  success: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_SUCCESS:
      return {
        success: true,
      }

    default:
      return state
  }
}
