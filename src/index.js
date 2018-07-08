import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from 'store'
import Routes from './routes'
import Global from 'scenes/Global'
import { fetchUser } from 'modules/user/actions'

// Global Styles
import 'sanitize.css/sanitize.css'
import './globalStyles'

// Create Redux store
const history = createHistory()
const store = configureStore(history)

const state = store.getState()

// Fetch user's data if user has a token.
// Don't fetch user on sign out page.
const isSignOutPage = window.location.href.indexOf('sign_out') === -1
if (state.auth.token && isSignOutPage) {
  store.dispatch(fetchUser())
}

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <Global />
      <Routes history={history} />
    </Fragment>
  </Provider>,
  document.getElementById('root')
)
