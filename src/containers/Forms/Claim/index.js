import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import {
  addClaim,
  resetAddClaimStates,
} from 'modules/claim/actions'
import { showSignInModal } from 'modules/modal/actions'
import { resetClaimEmbeds } from 'modules/embed/actions'
import { resetClaimFiles } from 'modules/file/actions'
import { CLAIM_FORM } from 'modules/claim/constants'
import Container from './Container'
import H2 from './H2'
import P from './P'
import Form from './Form'

class ClaimForm extends Component {
  onSubmit = this.onSubmit.bind(this)

  resetStates = this.resetStates.bind(this)
  checkUser = this.checkUser.bind(this)

  componentWillUnmount() {
    this.resetStates()
  }

  componentDidUpdate() {
    const { added } = this.props

    // Reset states only the claim created successfully.
    if (added) {
      this.resetStates()
    }
  }

  resetStates() {
    const {
      reset,
      resetAddClaimStates,
      resetClaimEmbeds,
      resetClaimFiles,
    } = this.props

    reset()
    resetAddClaimStates()
    resetClaimEmbeds()
    resetClaimFiles()
  }

  onSubmit(values) {
    const { addClaim } = this.props

    addClaim(values)
  }

  checkUser() {
    const { user, showSignInModal } = this.props

    if (!user) {
      showSignInModal()
    }
  }

  render() {
    return (
      <Container>
        <H2>Add Claim</H2>
        <P>Are you suspicious about something? Request evidence from the Factlist.</P>

        <Form
          onMultimediaInputFocus={this.checkUser}
          onSubmit={this.onSubmit} />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  added: state.claim.added,
})

const mapDispatchToProps = (dispatch) => ({
  addClaim: (data) => dispatch(addClaim(data)),
  reset: () => dispatch(reset(CLAIM_FORM)),
  resetAddClaimStates: () => dispatch(resetAddClaimStates()),
  resetClaimEmbeds: () => dispatch(resetClaimEmbeds()),
  resetClaimFiles: () => dispatch(resetClaimFiles()),
  showSignInModal: () => dispatch(showSignInModal()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClaimForm)
