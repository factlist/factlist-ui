import React, {createElement} from 'react'
import ReactDOM from 'react-dom'
import {createRouter, constants as router5Constants} from 'router5'
import browserPlugin from 'router5-plugin-browser'
import loggerPlugin from 'router5-plugin-logger'
import {RouterProvider, withRoute} from 'react-router5'
import {Provider as UnstatedProvider, Subscribe} from 'unstated'
import unstatedDebugger from 'unstated-debug'
import mapValues from 'lodash/mapValues'
import getApiDescription from './lib/apiDescription'
import {promiseAllObj} from './lib/util'
import {request} from './lib/request'
import {getJWT} from './lib/storage'
import {Modal, Notification} from './lib/ui'
import Layout from './Layout'
import {UserContainer, ModalContainer, NotificationContainer}
  from './containers'
import routes, {routesByName} from './routes'


if (process.env.NODE_ENV === 'development')
  unstatedDebugger.logStateChanges = true

const main = () =>
  Promise.all([
    getCurrentUser(),
    getApiDescription(),
  ])
    .then(([userData]) => {
      const
        user = new UserContainer(userData),
        router = makeRouter(user)

      router.start(() =>
        renderApp(user, router)
      )
    })
    .catch(err => {
      renderError()
      console.error('failed to fetch the user / API description', err)
    })

const getCurrentUser = () =>
  getJWT()
    ? request('/me')
    : Promise.resolve(null)

const makeRouter = user => {
  const router = createRouter(routes, {allowNotFound: true}, {user})

  router.usePlugin(browserPlugin(), loggerPlugin)

  router.useMiddleware(redirMiddleware, authMiddleware, dataMiddleware)

  return router
}

// Redirect users to the relevant home page in case of an unknown route.
// We could also redirect them to a 404 page if we wanted.
const redirMiddleware = (router, {user}) => toState => {
  const
    userIsGuest = !user.state.id,
    routeIsUnknown = toState.name === router5Constants.UNKNOWN_ROUTE

  return (routeIsUnknown || (!userIsGuest && toState.name === 'landing'))
    ? Promise.reject({
      redirect: {name: userIsGuest ? 'landing' : 'home'},
    })
    : Promise.resolve()
}

// Redirect guests to the login page if the target route requires auth
const authMiddleware = (router, {user}) => toState => {
  const
    routeIsProtected = routesByName[toState.name].opts.private,
    userIsGuest = !user.state.id

  return (routeIsProtected && userIsGuest)
    ? Promise.reject({redirect: {name: 'landing'}})
    : Promise.resolve()
}

// Fetch some data for the target component if the "data" prop is set
const dataMiddleware = () => toState => {
  let dataSpec = routesByName[toState.name].component.data || {}

  if (typeof dataSpec === 'function')
    dataSpec = dataSpec(toState)

  return promiseAllObj(
    mapValues(dataSpec, request)
  )
    .then(data => ({
      ...toState,
      data,
    }))
}

const renderApp = (user, router) =>
  ReactDOM.render(
    <UnstatedProvider inject={[user]}>
      <RouterProvider router={router}>
        <Subscribe to={[ModalContainer, NotificationContainer]}>
          {(modal, notification) => <>
            <Modal
              show={modal.state.open}
              onClose={modal.close}
              children={createElement(
                modal.state.component,
                modal.state.componentProps
              )}
            />

            <Notification
              open={notification.state.open}
              msg={notification.state.msg}
              onClose={notification.hide}
            />
          </>}
        </Subscribe>

        <Layout>
          <CurrentPage />
        </Layout>
      </RouterProvider>
    </UnstatedProvider>,

    document.getElementById('app')
  )

const CurrentPage = withRoute(({route}) =>
  createElement(routesByName[route.name].component)
)

const renderError = () =>
  ReactDOM.render(
    <>
      <h1>Something went wrong!</h1>

      <p>
        We could not connect to our servers! Please make sure you are connected
        to the internet; then refresh this page!
      </p>
    </>,

    document.getElementById('app')
  )

main()
