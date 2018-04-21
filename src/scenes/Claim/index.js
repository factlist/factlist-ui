import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Header from 'scenes/Header'
import { Container, Left, Right, Center } from 'components/Layout'
import { fetchClaim } from 'modules/claim/actions'
import { selectedClaim } from 'modules/claim/selectors'
import Claim from 'components/Claim'
import Evidence from 'components/Evidence'

class ClaimScene extends Component {
  componentWillMount() {
    const { fetchClaim } = this.props

    // Claim id
    const id = this.props.match.params.id

    fetchClaim(id)
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
