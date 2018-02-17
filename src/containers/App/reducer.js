import { USER_AUTH_SUCCESS } from '../../containers/LoginPage/constants'
import { LOGOUT_USER } from '../../containers/LogoutPage/constants'

const storage = localStorage.getItem('user')

const initialState = {
  user: storage ? JSON.parse(storage) : null
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
    default:
      return state
  }
}
