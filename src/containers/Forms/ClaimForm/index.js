import React, { Component } from 'react'
import H2 from './H2'
import P from './P'
import Textarea from './Textarea'
import Button from './Button'
import StyledDropzone from './StyledDropzone'
import Container from './Container'

import saga from './saga'
import reducer from './reducer'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { addReport } from './actions'

class ClaimForm extends Component {
  state = {
    text: '',
    files: []
  }

  acceptedFiles = [
    'image/jpeg',
    'image/png'
  ]

  handleClose = this.handleClose.bind(this)
  handleOnDrop = this.handleOnDrop.bind(this)
  handleOnSubmit = this.handleOnSubmit.bind(this)
  handleTextChange = this.handleTextChange.bind(this)

  componentDidMount() {
    this.textInput.focus()
  }

  handleClose() {
    const { onClose } = this.props

    onClose()
  }

  handleOnDrop(files) {
    this.setState({
      files
    })
  }

  handleTextChange(event) {
    const { value } = event.target

    this.setState({
      text: value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()

    this.props.addReport(this.state)
  }

  render() {
    return (
      <Container>
        <H2>Add Claim</H2>
        <P>Have any doubt on anything? Ask it to Factlist for proof.</P>

        <form onSubmit={this.handleOnSubmit}>
          <Textarea
            placeholder="Write lorem ipsum dolor sit amet."
            innerRef={(input) => this.textInput = input}
            value={this.state.text}
            onChange={this.handleTextChange}
          />

          {/* Selected files preview */}
          <ul>
            {this.state.files.map(file =>
              (<li key={Math.random()}>{file.name}</li>)
            )}
          </ul>

          <StyledDropzone
            accept={this.acceptedFiles.join(',')}
            onDrop={this.handleOnDrop}
          >
            Drag & Drop media files or click to browse your files
          </StyledDropzone>

          <Button>Add Claim</Button>
        </form>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.addReport.loading,
  error: state.addReport.error
})

const mapDispatchToProps = (dispatch) => ({
  addReport: (data) => dispatch(addReport(data))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withSaga = injectSaga({ key: 'addReport', saga })
const withReducer = injectReducer({ key: 'addReport', reducer })

export default compose(
  withSaga,
  withReducer,
  withConnect
)(ClaimForm)
