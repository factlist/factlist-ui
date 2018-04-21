import React, { Component } from 'react'
import { Flex, Box } from 'grid-styled'
import Container from './Container'
import Textarea from './Textarea'
import Button from './Button'
import Label from './Label'
import Upload from './Upload'
import Status from './Status'

import injectReducer from '../../utils/injectReducer'
import injectSaga from '../../utils/injectSaga'
import saga from './saga'
import reducer from './reducer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { addEvidence } from './actions'

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

    this.props.addEvidence(this.state)
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
  loading: state.evidenceForm.loading,
  error: state.evidenceForm.error,
})

const mapDispatchToProps = (dispatch) => ({
  addEvidence: (data) => dispatch(addEvidence(data))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'evidenceForm', reducer })
const withSaga = injectSaga({ key: 'evidenceForm', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect
)(EvidenceForm)
