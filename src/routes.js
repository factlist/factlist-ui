import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import MainPage from './containers/MainPage'
import LoginPage from './containers/LoginPage'
import LogoutPage from './containers/LogoutPage'
import SignupPage from './containers/SignupPage'

export default () => (
  <div>
    <Route path="/" exact component={MainPage} />
    <Route path="/login" exact component={LoginPage} />
    <PrivateRoute path="/logout" exact component={LogoutPage} />
    <Route path="/signup" exact component={SignupPage} />
  </div>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)
