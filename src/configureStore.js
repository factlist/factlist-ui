import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducers'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'

// Saga Middleware
const sagaMiddleware = createSagaMiddleware()

export default (history) => {
  // Create the store with redux-saga & router middlewares
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history)
  ]

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger())
  }

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension's options
      })
      : compose


  // Creating store
  const store = createStore(
    createReducer(),
    composeEnhancers(...enhancers)
  )

  // Extensions
  store.runSaga = sagaMiddleware.run
  store.injectedReducers = {} // Reducer registry
  store.injectedSagas = {} // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers))
    })
  }

  return store
}
