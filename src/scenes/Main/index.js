import React from 'react'
import {compose, withUser, withGraphql} from 'adapters'
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


    <Box >
      <Flex flexDirection="column">
        {(data && data.networkStatus === 7) &&
          data.topics.map(topic =>
            <Topic key={topic.id} topic={topic} isEdit={false} />
          )}
      </Flex>
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
