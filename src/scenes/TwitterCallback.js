import {compose} from 'recompose'
import {saveToken, saveUser} from 'lib/storage'
import {withNotification, withFetch} from 'adapters'


export default compose(
  withNotification,

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
