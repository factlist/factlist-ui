import React from 'react'
import {compose} from 'recompose'
import {graphql} from 'react-apollo'
import {getAllTopics} from 'modules/graphql/requests'
import { Flex, Box } from '@rebass/grid'
import {withUnstated} from 'utils/unstated'
import UserContainer from 'modules/auth/container'
import Layout from 'components/Layout'
import Slack from 'components/Slack'
import Footer from 'components/Footer'
import Topic from 'components/Topic'
import Separator from 'components/Separator'
import {RefinementList, RadioList} from 'components/Filter'
import cm from './main.module.css'


const MainScene = ({data}) => <Layout>
  <Flex
    className={cm.container}
    width={['auto','600px','960px', '1200px']}
    justifyContent="center"
  >
    <Box
      className={cm.leftSidebar}
      width={['235px']}
      mr='20px'
    >
      <div className="container">
        <RadioList
          title="USERS"
          options={['All People', 'People you follow']}
        />
        <Separator />

        <div className={cm.title}>SOURCES</div>
        <RefinementList attribute="type" searchable />
        <Separator />

        <div className={cm.title}>TAGS</div>
        <RefinementList attribute="category" searchable />
        <Separator />

        <RadioList
          title="TIME"
          options={[
            'All time',
            'Past Hour',
            'Past Day',
            'Past Week',
            'Past Month',
            'Past Year',
          ]}
        />
      </div>
    </Box>

    <Box flex='1 0 0' mx={0}>
      <Flex flexDirection="column">
        {(data && data.networkStatus === 7) &&
          data.topics.map(topic =>
            <Topic key={topic.id} topic={topic} isEdit={false} />
          )}
      </Flex>
    </Box>

    <Box
      className={cm.rightSidebar}
      width={['235px']}
      ml='20px'
    >
      <Box>
        <Slack />
      </Box>

      <Box mt={15}>
        <Footer />
      </Box>
    </Box>
  </Flex>
</Layout>

export default compose(
  withUnstated({user: UserContainer}),

  graphql(getAllTopics, {
    skip: props => !props.user.state.token,
  })
)(
  MainScene
)
