import {
  SHOW_MODAL,
  HIDE_MODAL,

  SIGN_IN,
  SIGN_UP,
} from './constants'

export const closeModal = () => ({
  type: HIDE_MODAL
})

// Modals
export const showSignInModal = () => ({
  type: SHOW_MODAL,
  name: SIGN_IN
})
