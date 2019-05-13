import {makeUnstated} from 'utils/unstated'

export default makeUnstated({
  user: {},
  token: null,
}, {
  setUser: () => user => ({user}),
  setToken: () => token => ({token}),
})
