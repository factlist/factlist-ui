import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import MainPage from './containers/MainPage'
import LoginPage from './containers/LoginPage'
import PrivatePage from './containers/PrivatePage'

export default () => (
  <div>
    <Route path="/" exact component={MainPage} />
    <Route path="/login" exact component={LoginPage} />
    <PrivateRoute path="/private-page" exact component={PrivatePage} />
  </div>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)
