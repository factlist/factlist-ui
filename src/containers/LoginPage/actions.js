import {
  USER_AUTH,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAILURE
} from './constants'

export const auth = (email, password) => ({
  type: USER_AUTH,
  email,
  password
})

export const authSuccess = (token) => ({
  type: USER_AUTH_SUCCESS,
  token
})

export const authFailure = (error) => ({
  type: USER_AUTH_FAILURE,
  error
})
