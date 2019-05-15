import {
  Main, Settings, ChangePassword, TwitterCallback, Profile, TopicCreate,
  TopicEdit
} from 'scenes'


export default [
  ['/',                        Main,           {exact: true}],
  ['/settings',                Settings,       {private: true}],
  ['/change_password/:key',    ChangePassword, {private: true}],
  ['/twitter/callback/:token', TwitterCallback],
  ['/@:username',              Profile],
  ['/topic/new',               TopicCreate],
  ['/topic/:id/edit',          TopicEdit],
]
