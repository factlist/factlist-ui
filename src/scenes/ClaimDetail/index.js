import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Header from 'scenes/Header'
import { Container, Left, Right, Center } from 'components/Layout'
import { fetchClaim } from 'modules/claim/actions'
import { selectedClaim } from 'modules/claim/selectors'
import Claim from 'containers/Claim'
import Evidence from 'containers/Evidence'
import EvidenceForm from 'containers/Forms/Evidence'

class ClaimDetail extends Component {
  claimId = parseInt(this.props.match.params.id, 10)

  componentWillMount() {
    const { fetchClaim } = this.props

    fetchClaim(this.claimId)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { claim } = this.props

    return (
      <Fragment>
        <Header />

        <Container>
          <Left></Left>
          <Center>
            {/* Claim */}
            {claim && <Claim claim={claim} />}

            {/* Evidences */}
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
  claim: selectedClaim(state),
})

const mapDispatchToProps = dispatch => ({
  fetchClaim: (id) => dispatch(fetchClaim({ id }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClaimDetail)
