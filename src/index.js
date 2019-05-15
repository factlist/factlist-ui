import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Switch, Redirect} from 'react-router-dom'
import {Provider as UnstatedProvider, Subscribe} from 'unstated'
import unstatedDebugger from 'unstated-debug'
import { ApolloProvider } from "react-apollo";
import {InstantSearch} from 'react-instantsearch-dom'
import {history, user, modal, notification} from 'store'
import {ModalContainer, NotificationContainer} from 'containers'
import {ModalRouter, Notification} from 'components'
import client from 'lib/graphql'
import {getToken} from 'lib/storage'
import {NotFound} from 'scenes'
import routes from './routes'
import 'sanitize.css/sanitize.css'
import './theme.css'


if (process.env.NODE_ENV === 'development')
  unstatedDebugger.logStateChanges = true

ReactDOM.render(
  <UnstatedProvider inject={[user, modal, notification]}>
    <ApolloProvider client={client}>
      <InstantSearch
        appId="latency"
        apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
        indexName="bestbuy"
      >
        <Subscribe to={[ModalContainer, NotificationContainer]}>
          {(modal, notification) => <>
            <ModalRouter
              open={modal.state.open}
              componentName={modal.state.componentName}
              componentProps={modal.state.componentProps}
              onClose={modal.hide}
            />

            <Notification
              open={notification.state.open}
              msg={notification.state.msg}
              onClose={notification.hide}
            />
          </>}
        </Subscribe>

        <Router history={history}>
          <Switch>
            {routes.map(([
              path,
              Component,
              {private: priv, ...opts} = {},
            ]) =>
              <Route
                key={path}
                path={path}
                {...opts}
                render={props =>
                  !priv || getToken()
                    ? <Component {...props} />

                    : <Redirect to={{
                        pathname: '/',
                        state: {from: props.location}
                    }} />
                }
              />
            )}

            <Route component={NotFound} />
          </Switch>
        </Router>
      </InstantSearch>
    </ApolloProvider>
  </UnstatedProvider>,

  document.getElementById('root')
)
