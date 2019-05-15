import {createBrowserHistory} from 'history'
import {UserContainer, ModalContainer, NotificationContainer} from 'containers'
import {getToken, getUser} from 'lib/storage'


export const history = createBrowserHistory()


export const user = new UserContainer({
  token: getToken(),
  user: getUser(),
})


export const modal = new ModalContainer()


export const notification = new NotificationContainer()

