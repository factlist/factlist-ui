import { LOCATION_CHANGE } from 'react-router-redux'
import {
  SHOW_NOTIFICATION_BAR,
  HIDE_NOTIFICATION_BAR,
} from './constants'

const initialState = {
  show: false,
  message: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION_BAR:
      return {
        show: true,
        message: action.message,
      }

    case HIDE_NOTIFICATION_BAR:
      return {
        show: false,
        message: null,
      }

    case LOCATION_CHANGE:
      return {
        show: false,
        message: null,
      }

    default:
      return state
  }
}
