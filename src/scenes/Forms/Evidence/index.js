import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Flex, Box } from 'grid-styled'
import Button from './Button'
import { addEvidence } from 'modules/evidence/actions'
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

    console.log(this.state)

    const { addEvidence, claimId } = this.props
    const payload = this.state

    addEvidence({ claimId, payload })
  }

  render() {
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
              placeholder="Start explaning your evidence here."
              onUrlsChange={this.onUrlsChange}
              onFilesChange={this.onFilesChange}
              onTextChange={this.onTextChange} />
          </Box>

          <Box>
            <Button>ADD EVIDENCE</Button>
          </Box>
        </Flex>
      </Form>
    )
  }
}

const mapStateToProps = (state) => ({
  requesting: state.evidence.requesting,
  error: state.evidence.error,
})

const mapDispatchToProps = (dispatch) => ({
  addEvidence: (data) => dispatch(addEvidence(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvidenceForm)
