import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchClaimsRequest } from 'modules/claim/actions'
import { Container, Left, Center, Right } from 'components/Layout'
import Header from 'scenes/Header'
import Slack from 'components/Slack'
import Footer from 'components/Footer'
import Topic from 'components/Topic'
import { Flex, Box } from 'grid-styled'
// import { ClaimLoader } from 'components/ContentLoaders'
// import ClaimList from './ClaimList'

class Main extends Component {
  componentDidMount() {
    // const { claims, fetchClaimsRequest } = this.props

    // if (claims.length === 0) {
    //   fetchClaimsRequest()
    // }
  }

  render() {
    // const {
    //   claims,
    //   requesting,
    //   hasMore,
    //   count,
    //   fetchClaimsRequest,
    // } = this.props

    const { topics } = this.props

    return (
      <Fragment>
        <Header />

        <Container>
          <Left>Popular Topics</Left>

          <Center>
            <Flex flexDirection="column">
            {topics.map(topic =>
              <Box key={topic.id} mb='30px'>
                <Topic
                  id={topic.id}
                  title={topic.title}
                  links={topic.links} />
              </Box>
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
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  topics: state.topic.all,
  claims: state.claim.list.data,
  requesting: state.claim.list.requesting,
  count: state.claim.list.count,
  hasMore: state.claim.list.hasMore,
})

const mapDispatchToProps = dispatch => ({
  fetchClaimsRequest: () => dispatch(fetchClaimsRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
