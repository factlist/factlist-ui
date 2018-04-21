import React, { Fragment } from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route, Switch, Redirect } from 'react-router-dom'

// Scenes
import Main from 'scenes/Main'
import SignIn from 'scenes/SignIn'
import SignOut from 'scenes/SignOut'
import SignUp from 'scenes/SignUp'
import NotFound from 'scenes/NotFound'
import Global from 'scenes/Global'

export default ({ history }) => (
  <Router history={history}>
    <Fragment>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/sign_in" component={SignIn} />
        <Route path="/sign_up" component={SignUp} />
        <PrivateRoute path="/sign_out" component={SignOut} />
        <Route component={NotFound} />
      </Switch>

      <Global />
    </Fragment>
  </Router>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/sign_in', state: { from: props.location } }} />
  )} />
)
