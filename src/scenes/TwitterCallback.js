import urllib from 'url'
import {compose} from 'recompose'
import {withRoute, withRouter} from 'react-router5'
import {withUser, withNotification} from '/containers'
import {saveJWT} from '/lib/storage'
import {withFetch} from '/lib/request'


export default compose(
  withUser,
  withNotification,
  withRoute,
  withRouter,

  withFetch(({user, route, router, notification}) => ({
    signInFetch: ({
      url: urllib.format({
        pathname: '/create-access-token-with-twitter',
        query: route.params,
      }),
      then: ({token}) => {
        saveJWT(token)

        return {
          url: '/me',
          then: userData => {
            user.set(userData)
              .then(() =>
                router.navigate('home')
              )
          },
        }
      },
      catch: err => {
        console.error('twitter error', err)

        notification.show(
          'Sorry, we couldn\'t authenticate. Please try again later.'
        )
      },
    }),
  }))
)(
  () => 'Please wait. You will be redirected..'
)
