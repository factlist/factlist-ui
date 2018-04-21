import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Header from 'scenes/Header'
import { Container, Left, Right, Center } from 'components/Layout'
import { fetchClaim } from 'modules/claim/actions'
import { selectedClaim } from 'modules/claim/selectors'
import Claim from 'components/Claim'
import Evidence from 'components/Evidence'
import EvidenceForm from 'scenes/Forms/Evidence'

class ClaimScene extends Component {
  claimId = this.props.match.params.id

  componentWillMount() {
    const { fetchClaim } = this.props

    fetchClaim(this.claimId)
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
            {claim && claim.evidences.map(evidence => <Evidence
              key={evidence.id}
              evidence={evidence} />)}

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
)(ClaimScene)
