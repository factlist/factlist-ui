import {
  SHOW_NOTIFICATION_BAR,
  HIDE_NOTIFICATION_BAR,
} from './constants'

export const showNotification = (message) => ({
  type: SHOW_NOTIFICATION_BAR,
  message,
})

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION_BAR,
})
