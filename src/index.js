import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from 'store'
import Routes from './routes'

// Global Styles
import 'sanitize.css/sanitize.css'
import './globalStyles'

// Create Redux store
const history = createHistory()
const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  document.getElementById('root')
)
