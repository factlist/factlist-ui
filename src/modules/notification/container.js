import {makeUnstated} from 'utils/unstated'

export default makeUnstated({
  open: false,
  msg: '',
}, {
  show: () => msg => ({open: true, msg}),
  hide: () => () => ({open: false}),
})
