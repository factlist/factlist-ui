import {
  SHOW_MODAL,
  HIDE_MODAL,
  SIGN_IN_MODAL,
  SIGN_UP_MODAL,
  ADD_CLAIM_MODAL,
} from './constants'

export const closeModal = () => ({
  type: HIDE_MODAL
})

// Modals
export const showSignInModal = () => ({
  type: SHOW_MODAL,
  name: SIGN_IN_MODAL
})

export const showSignUpModal = () => ({
  type: SHOW_MODAL,
  name: SIGN_UP_MODAL,
})

export const showAddClaimModal = () => ({
  type: SHOW_MODAL,
  name: ADD_CLAIM_MODAL
})
