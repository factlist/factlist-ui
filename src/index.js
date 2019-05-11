import React from 'react'
import ReactDOM from 'react-dom'
import {Provider as UnstatedProvider} from 'unstated'
import unstatedDebugger from 'unstated-debug'
import { Provider } from 'react-redux'
import { ApolloProvider } from "react-apollo";
import createHistory from 'history/createBrowserHistory'
import configureStore from 'store'
import {notification} from 'store/unstated'
// import { signInWithToken } from 'modules/auth/actions'
import Global from 'scenes/Global'
import Routes from './routes'
import client from 'modules/graphql';

// Global styles
import 'sanitize.css/sanitize.css'
import './globalStyles'

if (process.env.NODE_ENV == 'development')
  unstatedDebugger.logStateChanges = true

// Create Redux store with history
const history = createHistory()
const store = configureStore(history)

// Get token from state
const state = store.getState()
const token = state.auth.token

// Fetch user's data if client has a token.
// Don't sign in user on sign out page.
const isSignOutPage = window.location.href.indexOf('sign_out') !== -1
if (token && isSignOutPage === false) {
  // store.dispatch(signInWithToken(token))
}

// TODO: migrate from redux to apollo
ReactDOM.render(
  <Provider store={store}>
    <UnstatedProvider inject={[notification]}>
      <ApolloProvider client={client}>
        <Global />
        <Routes history={history} />
      </ApolloProvider>
    </UnstatedProvider>
  </Provider>,
  document.getElementById('root')
)

