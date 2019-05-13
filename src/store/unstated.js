import {getToken, getUser} from 'utils/storage'
import NotificationContainer from 'modules/notification/container'
import UserContainer from 'modules/auth/container'


export const notification = new NotificationContainer()

export const user = new UserContainer({
  token: getToken(),
  user: getUser(),
})
