import React from 'react'
import ReactDOM from 'react-dom'
import {Provider as UnstatedProvider, Subscribe} from 'unstated'
import unstatedDebugger from 'unstated-debug'
import { ApolloProvider } from "react-apollo";
import {InstantSearch} from 'react-instantsearch-dom'
import {user, notification} from 'store/unstated'
import history from 'store/history'
import NotificationContainer from 'modules/notification/container'
import ModalContainer from 'modules/modal/container'
import ModalRouter from 'components/ModalRouter'
import Notification from 'components/Notification'
import Routes from './routes'
import client from 'modules/graphql';

// Global styles
import 'sanitize.css/sanitize.css'
import './globalStyles'
import {ThemeProvider} from 'styled-components'

const theme = {
  breakpoints: ['600px', '960px', '1200px' ]
}

if (process.env.NODE_ENV === 'development')
  unstatedDebugger.logStateChanges = true

ReactDOM.render(
  <UnstatedProvider inject={[user, notification]}>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <InstantSearch
          appId="latency"
          apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
          indexName="bestbuy"
        >
          <Routes history={history} />

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
        </InstantSearch>
      </ThemeProvider>
    </ApolloProvider>
  </UnstatedProvider>,

  document.getElementById('root')
)

