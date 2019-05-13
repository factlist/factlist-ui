import React from 'react'
import {graphql} from 'react-apollo'
import {withUnstated} from 'utils/unstated'
import {compose} from 'recompose'
import UserContainer from 'modules/auth/container'
import ModalContainer from 'modules/modal/container'
import {getAllTopics} from 'modules/graphql/requests'

import { Flex, Box } from '@rebass/grid'
import { Container, Left, Center, Right } from 'components/Layout'
import Header from 'components/Header'
import Slack from 'components/Slack'
import Footer from 'components/Footer'
import Topic from 'components/Topic'
import Separator from 'components/Separator'
import { StyledRefinementList, RadioList } from 'components/Filter'


const MainScene = ({user, modal, data}) => <>
  <Header
    user={user.state.user}
    token={user.state.token}
    onClickSignInButton={() => modal.show('SignIn')}
  />

  <Container>
    <Left>
      <div className="container">
        <RadioList title="USERS" options={['All People', 'People you follow']} />
        <Separator />
        <div style={{ fontSize: '13px', opacity: '0.5' }}>SOURCES</div>
        <StyledRefinementList attribute="type" searchable />
        <Separator />
        <div style={{ fontSize: '13px', opacity: '0.5' }}>TAGS</div>
        <StyledRefinementList attribute="category" searchable />
      <Separator />
        <RadioList title="TIME" options={['All time', 'Past Hour', 'Past Day', 'Past Week', 'Past Month', 'Past Year']} />
      </div>
    </Left>

    <Center>
      <Flex flexDirection="column">
        {(data && data.networkStatus === 7) &&
          data.topics.map(topic =>
            <Topic key={topic.id} topic={topic} isEdit={false} />
          )}
      </Flex>
    </Center>

    <Right>
      <Box>
        <Slack />
      </Box>
      <Box mt={15}>
        <Footer />
      </Box>
    </Right>
  </Container>
</>

export default compose(
  withUnstated({
    user: UserContainer,
    modal: ModalContainer,
  }),

  graphql(getAllTopics, {
    skip: props => !props.user.state.token,
  })
)(
  MainScene
)
