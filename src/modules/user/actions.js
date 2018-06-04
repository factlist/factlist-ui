import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from './constants'

export const signUp = (data) => ({
  type: SIGN_UP_REQUEST,
  data,
})

export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS,
})

export const signUpFailure = () => ({
  type: SIGN_UP_FAILURE,
})

export const updateUser = (data) => ({
  type: UPDATE_USER_REQUEST,
  data,
})

export const userUpdated = (data) => ({
  type: UPDATE_USER_SUCCESS,
  data,
})

export const fetchUser = () => ({
  type: FETCH_USER_REQUEST,
})

export const userFetched = (data) => ({
  type: FETCH_USER_SUCCESS,
  data,
})
