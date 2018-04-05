import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configRoutes from '../../routes'
import configureStore from '../../configureStore'
import Modals from 'containers/Modals'

// Create Redux store
const history = createHistory()
const store = configureStore(history)

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Fragment>
        {configRoutes()}

        <Modals />
      </Fragment>
    </Router>
  </Provider>
)

export default App
