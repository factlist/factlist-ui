import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import MainPage from 'containers/Pages/MainPage'
import SignInPage from 'containers/Pages/SignInPage'
import LogoutPage from 'containers/Pages/LogoutPage'
import SignupPage from 'containers/Pages/SignupPage'
import NotFoundPage from 'components/NotFoundPage'

export default () => (
  <Switch>
    <Route path="/" exact component={MainPage} />
    <Route path="/sign_in" component={SignInPage} />
    <PrivateRoute path="/logout" component={LogoutPage} />
    <Route path="/sign_up" component={SignupPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)
