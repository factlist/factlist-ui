import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Box } from 'grid-styled'
import { fetchClaimsRequest } from 'modules/claim/actions'
import { Container, Left, Center, Right } from 'components/Layout'
import Header from 'scenes/Header'
import Slack from 'components/Slack'
import Footer from 'components/Footer'
import { ClaimLoader } from 'components/ContentLoaders'
import ClaimList from './ClaimList'

class Main extends Component {
  componentDidMount() {
    const { claims, fetchClaimsRequest } = this.props

    if (claims.length === 0) {
      fetchClaimsRequest()
    }
  }

  render() {
    const {
      claims,
      requesting,
      hasMore,
      count,
      fetchClaimsRequest,
    } = this.props

    return (
      <Fragment>
        <Header />

        <Container>
          <Left>Popular Topics</Left>

          <Center>
            {requesting && claims.length === 0 && <ClaimLoader />}

            {claims.length !== 0 && <ClaimList
              claims={claims}
              count={count}
              hasMore={hasMore}
              fetchClaimsRequest={fetchClaimsRequest} />}
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
