import {makeUnstated} from 'utils/unstated'

export default makeUnstated({
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
