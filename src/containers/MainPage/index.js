import React, { Component } from 'react'
import Claim from '../../components/Claim'
import { Flex, Box } from 'grid-styled'
import Footer from '../../components/Footer'
import LeftBox from './LeftBox'
import CenterBox from './CenterBox'
import RightBox from './RightBox'
import Slack from '../../components/Slack'
import Header from '../../components/Header'
import UserCard from '../../components/UserCard'
import AddReport from '../AddReport'

import { connect } from 'react-redux'
import { compose } from 'redux'
import injectReducer from '../../utils/injectReducer'
import injectSaga from '../../utils/injectSaga'
import reducer from './reducer'
import saga from './saga'
import { fetchClaims } from './actions'

class MainPage extends Component {
  state = {
    isAddReportOpen: false
  }

  openReport = this.openReport.bind(this)
  closeReportModal = this.closeReportModal.bind(this)

  openReport() {
    this.setState({
      isAddReportOpen: true
    })
  }

  closeReportModal() {
    this.setState({
      isAddReportOpen: false
    })
  }

  componentDidMount() {
    this.props.fetchClaims()
  }

  render() {
    const { user, claims } = this.props
    const { isAddReportOpen } = this.state

    return (
      <div>
        <Header
          user={this.props.user}
          openReport={this.openReport}
        />

        <Flex justify="center" wrap>
          <LeftBox>

            { user &&
              <Box mb={30}>
                <UserCard />
              </Box>
            }

          </LeftBox>

          <CenterBox>
            {claims.map((claim) =>
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

        {isAddReportOpen && <AddReport onClose={this.closeReportModal} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.global.user,
  claims: state.claims.data
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
