import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Flex, Box } from 'grid-styled'
import Header from 'scenes/Header'
import Slack from 'components/Slack'
import Footer from 'components/Footer'
import Claim from 'components/Claim'
import LeftBox from './LeftBox'
import CenterBox from './CenterBox'
import RightBox from './RightBox'

import { fetchClaims } from 'modules/claim/actions'

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

        <Flex justify="center" wrap>
          <LeftBox>
            {/* Popular topics */}
          </LeftBox>

          <CenterBox>
            {fetching && 'Getting claims...'}

            {!fetching && claims.map((claim) =>
              <Box mb={30} key={'claim_' + claim.id}>
                <Claim claim={claim} />
              </Box>
            )}
          </CenterBox>

          <RightBox>
            <Box>
              <Slack />
            </Box>
            <Box mt={15}>
              <Footer />
            </Box>
          </RightBox>
        </Flex>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  claims: state.claim.data,
  fetching: state.claim.fetching,
})

const mapDispatchToProps = dispatch => ({
  fetchClaims: () => dispatch(fetchClaims())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
