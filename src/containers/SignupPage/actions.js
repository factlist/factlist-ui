import {
  USER_SIGN_UP,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_FAILURE
} from './constants'

export const userSignUp = (data) => ({
  type: USER_SIGN_UP,
  data
})

export const signUpSuccess = () => ({
  type: USER_SIGN_UP_SUCCESS
})

export const signUpFailure = (error) => ({
  type: USER_SIGN_UP_FAILURE,
  error
})
