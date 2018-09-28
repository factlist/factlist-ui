import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import createReducers from './reducers'
import sagas from './sagas'

// Create saga middleware
const sagaMiddleware = createSagaMiddleware()

export default (history) => {
  // Create the store with redux-saga & router middlewares
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history)
  ]

  if (process.env.NODE_ENV === 'development') {
    // middlewares.push(createLogger())
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
    createReducers(),
    composeEnhancers(...enhancers)
  )

  // Run sagas
  sagaMiddleware.run(sagas)

  return store
}
