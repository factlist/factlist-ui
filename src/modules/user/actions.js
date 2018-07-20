import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
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

export const createPasswordChangeKey = (email) => ({
  type: FORGOT_PASSWORD_REQUEST,
  email,
})

export const passwordChangeKeySent = () => ({
  type: FORGOT_PASSWORD_SUCCESS,
})

export const changePassword = ({ changeKey, password }) => ({
  type: CHANGE_PASSWORD_REQUEST,
  changeKey,
  password,
})

export const passwordChanged = () => ({
  type: CHANGE_PASSWORD_SUCCESS,
})
