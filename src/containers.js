/*
 * Containers basically mean "global state" containers in this context.
 * Below are the global state bits powered by Unstated:
 */

import {makeUnstated, withUnstated} from '/lib/unstated'
import {noop} from 'lodash-es'


const defaultUser = {}

export const UserContainer = makeUnstated('User', defaultUser, {
  set: () => user => user,
  setToDefault: () => () => defaultUser,
})

export const withUser = withUnstated({user: UserContainer})


export const ModalContainer = makeUnstated('Modal', {
  open: false,
  component: () => null,
  componentProps: {},
  onClose: noop,
}, {
  open: () => (component, componentProps = {}, onClose = noop) => ({
    open: true,
    component,
    componentProps,
    onClose,
  }),

  close: ({onClose}) => data => {
    onClose(data)
    return {open: false}
  },
})

export const withModal = withUnstated({modal: ModalContainer})


export const NotificationContainer = makeUnstated('Notification', {
  open: false,
  msg: '',
}, {
  show: () => msg => ({open: true, msg}),
  hide: () => () => ({open: false}),
})

export const withNotification =
  withUnstated({notification: NotificationContainer})
