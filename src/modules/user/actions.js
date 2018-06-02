import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from './constants'

export const signUp = (data) => ({
  type: SIGN_UP_REQUEST,
  data
})

export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS
})

export const signUpFailure = () => ({
  type: SIGN_UP_FAILURE
})
