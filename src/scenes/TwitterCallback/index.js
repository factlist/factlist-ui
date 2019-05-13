import {compose} from 'recompose'
import {withRouter} from 'react-router'
import {withUnstated} from 'utils/unstated'
import NotificationContainer from 'modules/notification/container'
import {withFetch} from 'utils/request'
import {saveToken, saveUser} from 'utils/storage'


export default compose (
  withUnstated({
    notification: NotificationContainer,
  }),

  withRouter,

  withFetch(({match, history, notification}) => ({
    signInFetch: ({
      url: '/auth/me',
      headers: {Authorization: 'Token ' + match.params.token},
      then: resp => {
        saveToken(match.params.token)
        saveUser(resp.user)
        history.push('/')
      },
      catch: () => {
        notification.show(
          'Sorry, we couldn\'t authenticate. Please try again later.'
        )
      },
    }),
  }))
)(
  () => null
)
