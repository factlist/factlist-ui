import {withUnstated} from 'lib/unstated'
import {UserContainer, ModalContainer, NotificationContainer} from 'containers'


export {graphql as withGraphql} from 'react-apollo'

export {withRouter} from 'react-router'

export {withUnstated}

export const withUser = withUnstated({user: UserContainer})

export const withModal = withUnstated({modal: ModalContainer})

export const withNotification =
  withUnstated({notification: NotificationContainer})

export {withForm} from 'lib/form'

export {withFetch} from 'lib/request'

export {withState, withStateHandlers} from 'recompose'


// Helpers tightly coupled to the above adapters who aren't themselves adapters:

export {compose} from 'recompose'
export {Form} from 'formik'
export {formFetch} from 'lib/request'
