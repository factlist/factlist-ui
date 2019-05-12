import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {withUnstated} from 'utils/unstated'
import {compose} from 'recompose'
import ModalContainer from 'modules/modal/container'

import { Flex, Box } from '@rebass/grid'
import { fetchTopicsRequest } from 'modules/topic/actions'
import { Container, Left, Center, Right } from 'components/Layout'
import Header from 'components/Header'
import Slack from 'components/Slack'
import Footer from 'components/Footer'
import Topic from 'components/Topic'
import Separator from 'components/Separator'
import { StyledRefinementList, RadioList } from 'components/Filter'
import { InstantSearch } from 'react-instantsearch-dom';

class Main extends Component {
  componentDidMount() {
    const { token, fetchTopicsRequest } = this.props

    if (token) {
      fetchTopicsRequest()
    }
  }

  componentDidUpdate(prevProps) {
    const { token, fetchTopicsRequest } = this.props

    if (prevProps.token !== token) {
      fetchTopicsRequest()
    }
  }

  render() {
    const {user, token, authenticating, topics, modal} = this.props;

    return (
      <Fragment>
        <InstantSearch appId="latency" apiKey="3d9875e51fbd20c7754e65422f7ce5e1" indexName="bestbuy">
          <Header
            user={user}
            token={token}
            authenticating={authenticating}
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
                {topics.length > 0 && topics.map(topic =>
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
        </InstantSearch>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  authenticating: state.auth.authenticating,
  user: state.auth.user,
  requesting: state.topic.all.requesting,
  topics: state.topic.all.data,
  token: state.auth.token,
})

const mapDispatchToProps = dispatch => ({
  fetchTopicsRequest: () => dispatch(fetchTopicsRequest()),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withUnstated({modal: ModalContainer})
)(
  Main
)
