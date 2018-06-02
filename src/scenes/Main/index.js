import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Box } from 'grid-styled'
import { Container, Left, Center, Right } from 'components/Layout'
import Header from 'scenes/Header'
import Slack from 'components/Slack'
import Footer from 'components/Footer'
import Claim from 'components/Claim'
import { fetchClaims } from 'modules/claim/actions'
import { allClaims } from 'modules/claim/selectors'

class Main extends Component {
  componentWillMount() {
    const { fetchClaims } = this.props

    fetchClaims()
  }

  render() {
    const { claims, fetching } = this.props

    return (
      <Fragment>
        <Header />

        <Container>
          <Left>Popular Topics</Left>

          <Center>
            {fetching && 'Getting claims...'}

            {!fetching && claims.map(claim =>
              <Box mb={30} key={'claim_' + claim.id}>
                <Claim claim={claim} />
              </Box>
            )}
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
  user: state.auth.user,
  claims: allClaims(state),
  fetching: state.claim.fetching,
})

const mapDispatchToProps = dispatch => ({
  fetchClaims: () => dispatch(fetchClaims())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
