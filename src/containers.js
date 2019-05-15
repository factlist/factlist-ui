/*
 * Containers basically mean "global state" containers in this context.
 * Below are the global state bits powered by Unstated:
 */

import {makeUnstated} from 'lib/unstated'


export const UserContainer = makeUnstated({
  user: {},
  token: null,
}, {
  setUser: () => user => ({user}),
  setToken: () => token => ({token}),
})


export const ModalContainer = makeUnstated({
  open: false,
  componentName: null,
  componentProps: null,
}, {
  show: () => (componentName, componentProps) => ({
    open: true,
    componentName,
    componentProps,
  }),

  hide: () => () => ({open: false}),
})


export const NotificationContainer = makeUnstated({
  open: false,
  msg: '',
}, {
  show: () => msg => ({open: true, msg}),
  hide: () => () => ({open: false}),
})
