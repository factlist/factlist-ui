import React from 'react'
import {compose, setStatic} from 'recompose'
import {withRoute, Link} from 'react-router5'
import {withUser} from '/containers'


const HomeDumb = ({user, route}) =>
  <ul>
    {route.data.topics.map(topic =>
      <li key={topic.id}>
        <Link
          routeName='topic'
          routeParams={{
            username: user.state.username,
            topicId: topic.id,
          }}
          children={topic.title}
        />
      </li>
    )}
  </ul>

export default compose(
  setStatic('data', {topics: '/topics'}),
  withRoute,
  withUser,
)(
  HomeDumb
)
