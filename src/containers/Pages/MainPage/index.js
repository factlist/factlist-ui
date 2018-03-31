import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import { Flex, Box } from 'grid-styled'
import Slack from 'components/Slack'
import Header from 'containers/Header'
import Footer from 'components/Footer'
import UserCard from 'components/UserCard'
import Claim from 'components/Claim'
import reducer from './reducer'
import saga from './saga'
import { fetchClaims } from './actions'
import LeftBox from './LeftBox'
import CenterBox from './CenterBox'
import RightBox from './RightBox'

class MainPage extends Component {
  componentDidMount() {
    this.props.fetchClaims()
  }

  render() {
    const { user, claims, fetching } = this.props

    return (
      <Fragment>
        <Header />

        <Flex justify="center" wrap>
          <LeftBox>

            { user &&
              <Box mb={30}>
                <UserCard />
              </Box>
            }

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

const mapStateToProps = (state) => ({
  user: state.global.user,
  claims: state.claims.data,
  fetching: state.claims.fetching,
})

const mapDispatchToProps = (dispatch) => ({
  fetchClaims: () => dispatch(fetchClaims())
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'claims', reducer })
const withSaga = injectSaga({ key: 'claims', saga})

export default compose(
  withReducer,
  withSaga,
  withConnect
)(MainPage)
