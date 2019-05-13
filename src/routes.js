import React from 'react'
import {Router, Route, Switch, Redirect} from 'react-router-dom'
import { getToken } from 'utils/storage'
import Main from 'scenes/Main'
import NotFound from 'scenes/NotFound'
import Settings from 'scenes/Settings'
import ChangePassword from 'scenes/ChangePassword'
import TwitterCallback from 'scenes/TwitterCallback'
import Profile from 'scenes/Profile'
import NewTopic from 'scenes/Topic/New'
import EditTopic from 'scenes/Topic/Edit'


export default ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Main} />
      <PrivateRoute path="/settings" component={Settings} />
      <PrivateRoute path="/change_password/:key" component={ChangePassword} />
      <Route path="/twitter/callback/:token" component={TwitterCallback} />
      <Route path="/@:username" component={Profile} />
      <Route path="/topic/new" component={NewTopic} />
      <Route path="/topic/:id/edit" component={EditTopic} />
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
