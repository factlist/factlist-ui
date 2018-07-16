import React from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { getToken } from 'utils/storage'

// Scenes
import Main from 'scenes/Main'
import SignOut from 'scenes/SignOut'
import NotFound from 'scenes/NotFound'
import ClaimWithEvidences from 'scenes/ClaimWithEvidences'
import Settings from 'scenes/Settings'
import ChangePassword from 'scenes/ChangePassword'
import SignInWithTwitter from 'scenes/SignInWithTwitter'

export default ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/claims/:id" component={ClaimWithEvidences} />
      <PrivateRoute path="/sign_out" component={SignOut} />
      <PrivateRoute path="/settings" component={Settings} />
      <Route path="/change_password/:key" component={ChangePassword} />
      <Route path="/twitter/callback/:token" component={SignInWithTwitter} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    getToken()
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
  )} />
)
