import React from 'react'
import {compose} from 'recompose'
import {withUser, withGraphql} from 'adapters'
import gql from 'graphql-tag'
import { Flex, Box } from '@rebass/grid'
import {Layout, Slack, Footer, Topic, Separator, RefinementList, RadioList}
  from 'components'
import cm from './main.module.css'


export const getTopicsQuery = gql`query {
  topics {
    id
    title
    user {id, username, name, email}
    links {id, title, url, tags {id, title}}
  }
}`


const MainScene = ({data}) => <Layout>
  <Flex
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
  withUser,

  withGraphql(getTopicsQuery, {
    skip: props => !props.user.state.token,
  })
)(
  MainScene
)
