import { LOCATION_CHANGE } from 'react-router-redux'
import { SHOW_MODAL, HIDE_MODAL } from './constants'

const initialState = {
  name: null,
  data: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        name: action.name,
        data: action.data || null,
      }

    case HIDE_MODAL:
      return {
        ...state,
        name: null,
        data: null,
      }

    // Close all modals when route is changed.
    case LOCATION_CHANGE:
      return {
        ...state,
        name: null,
        data: null,
      }

    default:
      return state
  }
}
