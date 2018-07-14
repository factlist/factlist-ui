import {
  SIGN_IN_REQUEST,
  SIGN_IN_WITH_TWITTER,
  SIGN_IN_WITH_TOKEN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
} from './constants'

export const signIn = ({ email, password }) => ({
  type: SIGN_IN_REQUEST,
  email,
  password
})

export const signInSuccess = ({ token }) => ({
  type: SIGN_IN_SUCCESS,
  token
})

export const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  error
})

export const signOut = () => ({
  type: SIGN_OUT_REQUEST
})

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
})

export const signInWithTwitter = () => ({
  type: SIGN_IN_WITH_TWITTER,
})

export const signInWithToken = (token) => ({
  type: SIGN_IN_WITH_TOKEN,
  token,
})
