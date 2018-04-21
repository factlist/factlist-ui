import { TOGGLE_TIMEAGO_FORMAT } from './constants'

const timeago = localStorage.getItem('timeago')

const initialState = {
  timeago: timeago ? true : false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TIMEAGO_FORMAT:
      return {
        timeago: !state.timeago
      }

    default:
      return state
  }
}
