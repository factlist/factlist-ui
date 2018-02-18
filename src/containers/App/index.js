import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import configureStore from '../../configureStore'
import createHistory from 'history/createBrowserHistory'
import configRoutes from '../../routes'

// Create Redux store
const history = createHistory()
const store = configureStore(history)

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        {configRoutes()}
      </div>
    </Router>
  </Provider>
)

export default App
