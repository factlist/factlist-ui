import {
  Landing, Home, Settings, ChangePassword, TwitterCallback, Profile,
  Topic, Signin, Signup, PasswordReset,
} from './scenes'


/* eslint-disable max-len */
const routes = [
  ['landing',          '/',                                              Landing],
  ['twitter-callback', '/twitter-callback?:oauth_token&:oauth_verifier', TwitterCallback],
  ['profile',          '/:username',                                     Profile],
  ['topic',            '/:username/:topicId',                            Topic],
  ['home',             '/home',                                          Home,           {private: true}],
  ['settings',         '/settings',                                      Settings,       {private: true}],
  ['change-password',  '/change_password/:key',                          ChangePassword, {private: true}],
]
  .map(([name, path, component, opts = {}]) => ({name, path, component, opts}))
/* eslint-enable max-len */

export default routes

export const routesByName = routes.reduce(
  (acc, route) => ({...acc, [route.name]: route}),
  {}
)
