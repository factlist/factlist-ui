import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
} from './constants'

export const fetchUserProfile = (username) => ({
  type: FETCH_USER_PROFILE_REQUEST,
  username,
})

export const userProfileFetched = ({ user, claims }) => ({
  type: FETCH_USER_PROFILE_SUCCESS,
  user,
  claims,
})
