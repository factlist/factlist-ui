import { USER_AUTH_SUCCESS } from 'containers/Pages/LoginPage/constants'
import { LOGOUT_USER } from 'containers/Pages/LogoutPage/constants'
import { TOGGLE_TIMEAGO_FORMAT } from 'containers/Timeago/constants'

const userStorage = localStorage.getItem('user')
const timeago = localStorage.getItem('timeago')

const initialState = {
  user: userStorage ? JSON.parse(userStorage) : null,
  timeago: timeago ? true : false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH_SUCCESS:
      return {
        ...state,
        user: {
          token: action.token
        }
      }
    case LOGOUT_USER:
      return {
        ...state,
        user: null
      }
    case TOGGLE_TIMEAGO_FORMAT:
      return {
        ...state,
        timeago: !state.timeago
      }
    default:
      return state
  }
}
