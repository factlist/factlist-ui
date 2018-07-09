import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initialize } from 'redux-form'
import _ from 'utils/_'
import { resetEvidenceEmbeds } from 'modules/embed/actions'
import { resetEvidenceFiles } from 'modules/file/actions'
import { EVIDENCE_FORM } from 'modules/evidence/constants'
import { showSignInModal } from 'modules/modal/actions'
import {
  addEvidence,
  resetAddEvidenceStates,
} from 'modules/evidence/actions'
import Form from './Form'

class EvidenceForm extends Component {
  onSubmit = this.onSubmit.bind(this)
  resetStates = this.resetStates.bind(this)
  checkUser = this.checkUser.bind(this)

  state = {
    formKey: _.randomId(),
  }

  componentWillUnmount() {
    this.resetStates()
  }

  componentDidUpdate() {
    const { success } = this.props

    // Reset states only the evidence created successfully.
    // We are using key attribute in order to reset all
    // internal states. This step is necessary to reset draft.js inside redux-form.
    // Also, Redux-form can't reset its states when key is changed
    // So we need to initialize evidence form again.
    if (success) {
      this.setState({ formKey: _.randomId() })

      this.resetStates()
    }
  }

  checkUser() {
    const { user, showSignInModal } = this.props

    if (!user) {
      showSignInModal()
    }
  }

  resetStates() {
    const {
      initialize,
      resetAddEvidenceStates,
      resetEvidenceEmbeds,
      resetEvidenceFiles,
    } = this.props

    initialize()
    resetAddEvidenceStates()
    resetEvidenceEmbeds()
    resetEvidenceFiles()
  }

  onSubmit(values) {
    const { addEvidence, claimId } = this.props

    addEvidence({
      claimId,
      payload: values,
    })
  }

  render() {
    const { formKey } = this.state

    return <Form
      key={formKey}
      onMultimediaInputFocus={this.checkUser}
      onSubmit={this.onSubmit} />
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  error: state.evidence.error,
  success: state.evidence.success,
})

const mapDispatchToProps = (dispatch) => ({
  addEvidence: (data) => dispatch(addEvidence(data)),
  resetAddEvidenceStates: () => dispatch(resetAddEvidenceStates()),
  initialize: () => dispatch(initialize(EVIDENCE_FORM)),
  resetEvidenceEmbeds: () => dispatch(resetEvidenceEmbeds()),
  resetEvidenceFiles: () => dispatch(resetEvidenceFiles()),
  showSignInModal: () => dispatch(showSignInModal()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvidenceForm)
