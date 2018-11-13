import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Header from 'scenes/Header'
import { Container, Left, Right, Center } from 'components/Layout'
import { fetchClaimByIdRequest } from 'modules/claim/actions'
import Evidence from 'containers/Evidence'
import EvidenceForm from 'containers/Forms/Evidence'
import { ClaimLoader } from 'components/ContentLoaders'

class ClaimDetail extends Component {
  claimId = parseInt(this.props.match.params.id, 10)

  componentDidMount() {
    const { fetchClaimByIdRequest } = this.props

    fetchClaimByIdRequest(this.claimId)

    window.scrollTo(0, 0)
  }

  render() {
    const { requesting, claim } = this.props

    return (
      <Fragment>
        <Header />

        <Container>
          <Left></Left>
          <Center>
            {requesting && <ClaimLoader />}

            <div style={{ marginBottom: '40px' }}>
              {claim && claim.evidences.map(evidence => <Evidence
                key={evidence.id}
                evidence={evidence} />)}
            </div>

            <EvidenceForm claimId={this.claimId} />
          </Center>
          <Right></Right>
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  requesting: state.claim.detail.requesting,
  claim: state.claim.detail.data,
})

const mapDispatchToProps = dispatch => ({
  fetchClaimByIdRequest: (id) => dispatch(fetchClaimByIdRequest(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClaimDetail)
