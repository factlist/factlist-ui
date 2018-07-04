import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  addEvidence,
  resetAddEvidenceStates
} from 'modules/evidence/actions'
import Form from './Form'

class EvidenceForm extends Component {
  onSubmit = this.onSubmit.bind(this)

  componentWillUnmount() {
    const { resetAddEvidenceStates } = this.props

    resetAddEvidenceStates()
  }

  onSubmit(values) {
    const { addEvidence, claimId } = this.props

    addEvidence({
      claimId,
      payload: values,
    })
  }

  render() {
    return <Form
      onSubmit={this.onSubmit}/>
  }
}

const mapStateToProps = (state) => ({
  error: state.evidence.error,
  success: state.evidence.success,
})

const mapDispatchToProps = (dispatch) => ({
  addEvidence: (data) => dispatch(addEvidence(data)),
  resetAddEvidenceStates: () => dispatch(resetAddEvidenceStates()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvidenceForm)
