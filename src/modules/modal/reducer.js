import { LOCATION_CHANGE } from 'react-router-redux'
import { SHOW_MODAL, HIDE_MODAL } from './constants'

const initialState = {
  name: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        name: action.name
      }

    case HIDE_MODAL:
      return {
        ...state,
        name: null
      }

    // Close all modals when route is changed.
    case LOCATION_CHANGE:
      return {
        ...state,
        name: null
      }

    default:
      return state
  }
}
