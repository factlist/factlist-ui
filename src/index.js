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
import 'sanitize.css/sanitize.css'
import './theme.css'


if (process.env.NODE_ENV === 'development')
  unstatedDebugger.logStateChanges = true

ReactDOM.render(
  <UnstatedProvider inject={[user, notification]}>
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

        <Routes history={history} />
      </InstantSearch>
    </ApolloProvider>
  </UnstatedProvider>,

  document.getElementById('root')
)

