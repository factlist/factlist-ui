import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Flex, Box } from 'grid-styled'
import Button from './Button'
import { addEvidence, resetAddEvidenceStates } from 'modules/evidence/actions'
import Form from './Form'
import Label from './Label'
import Status from './Status'
import MultimediaInput from 'scenes/MultimediaInput'

class EvidenceForm extends Component {
  state = {
    text: '',
    files: [],
    links: [],
    status: null,
  }

  handleSubmit = this.handleSubmit.bind(this)
  onStatusSelect = this.onStatusSelect.bind(this)
  onUrlsChange = this.onUrlsChange.bind(this)
  onFilesChange = this.onFilesChange.bind(this)
  onTextChange = this.onTextChange.bind(this)

  componentWillReceiveProps(nextProps) {
    const { resetAddEvidenceStates } = this.props

    if (nextProps.success === true) {
      resetAddEvidenceStates()
      this.multimediaInput.reset()
    }
  }

  componentWillUnmount() {
    const { resetAddEvidenceStates } = this.props

    resetAddEvidenceStates()
  }

  onStatusSelect(status) {
    this.setState({ status })
  }

  onUrlsChange(urls) {
    this.setState({ links:  urls })
  }

  onFilesChange(files) {
    this.setState({ files })
  }

  onTextChange(text) {
    this.setState({ text })
  }

  handleSubmit(event) {
    event.preventDefault()

    const { addEvidence, claimId } = this.props
    const payload = this.state

    addEvidence({ claimId, payload })
  }

  render() {
    const { requesting } = this.props

    return (
      <Form onSubmit={this.handleSubmit}>
        <Flex column>
          <Box mb={30}>
            <Label>Claim is:</Label>
            <Status onSelect={this.onStatusSelect} />
          </Box>
          <Box mb={15}>
            <Label>Because:</Label>
            <MultimediaInput
              ref={node => this.multimediaInput = node}
              placeholder="Start explaning your evidence here."
              onUrlsChange={this.onUrlsChange}
              onFilesChange={this.onFilesChange}
              onTextChange={this.onTextChange} />
          </Box>

          <Box>
            <Button disabled={requesting}>
              {requesting ? 'Adding...' : 'Add Evidence'}
            </Button>
          </Box>
        </Flex>
      </Form>
    )
  }
}

const mapStateToProps = (state) => ({
  requesting: state.evidence.requesting,
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
