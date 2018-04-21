import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEvidence } from 'modules/evidence/actions'
import { Flex, Box } from 'grid-styled'
import Container from './Container'
import Textarea from './Textarea'
import Button from './Button'
import Label from './Label'
import Upload from './Upload'
import Status from './Status'

class EvidenceForm extends Component {
  state = {
    text: '',
    files: [],
    links: [],
    status: null
  }

  handleOnSubmit = this.handleOnSubmit.bind(this)
  onStatusSelect = this.onStatusSelect.bind(this)
  onTextChange = this.onTextChange.bind(this)
  onSelectFiles = this.onSelectFiles.bind(this)

  onStatusSelect(status) {
    this.setState({ status })
  }

  onSelectFiles(files) {
    this.setState({ files })
  }

  onTextChange(event) {
    const { value } = event.target

    const links = value.match(/(https?:\/\/[^\s]+\.[a-z]+)/g) || []
    this.setState({
      text: value,
      links
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()

    const { addEvidence, claimId } = this.props

    addEvidence({
      claimId,
      payload: this.state,
    })
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.handleOnSubmit}>
          <Flex column>
            <Box mb={30}>
              <Label>This report is:</Label>
              <Status onSelect={this.onStatusSelect} />
            </Box>
            <Box mb={15}>
              <Label>Because:</Label>
              <Textarea
                placeholder="Description or URL"
                onChange={this.onTextChange}
                value={this.state.text}
              />
            </Box>
            <Box mb={20}>
              <Upload onSelect={this.onSelectFiles} />
            </Box>
            <Box>
              <Button>ADD EVIDENCE</Button>
            </Box>
          </Flex>
        </form>
      </Container>
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
