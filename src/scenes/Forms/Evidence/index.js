import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Flex, Box } from 'grid-styled'
import Button from './Button'
import { addEvidence } from 'modules/evidence/actions'
import Form from './Form'
import Label from './Label'
import Upload from './Upload'
import Status from './Status'
import MultimediaInput from 'scenes/MultimediaInput'

class EvidenceForm extends Component {
  state = {
    text: '',
    attachments: [],
    files: [],
    links: [],
    status: null
  }

  handleSubmit = this.handleSubmit.bind(this)
  onStatusSelect = this.onStatusSelect.bind(this)
  onSelectFiles = this.onSelectFiles.bind(this)
  onLinks = this.onLinks.bind(this)

  onLinks(links) {
    this.setState({ links })
  }

  onStatusSelect(status) {
    this.setState({ status })
  }

  onSelectFiles(files) {
    this.setState((prevState) => ({
      files: prevState.files.concat(files),
    }))
  }

  handleSubmit(event) {
    event.preventDefault()

    const { addEvidence, claimId } = this.props
    const payload = this.state

    addEvidence({ claimId, payload })
  }

  render() {
    // const { links, files } = this.state
    // const attachments = links.concat(files)

    return (
      <Form onSubmit={this.handleSubmit}>
        <Flex column>
          <Box mb={30}>
            <Label>This report is:</Label>
            <Status onSelect={this.onStatusSelect} />
          </Box>
          <Box mb={15}>
            <Label>Because:</Label>
            <MultimediaInput />
          </Box>
          <Box mb={20}>
            <Upload onSelect={this.onSelectFiles} />
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
