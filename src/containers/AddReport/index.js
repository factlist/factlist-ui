import React, { Component } from 'react'
import Background from './Background'
import Modal from './Modal'
import H2 from './H2'
import P from './P'
import Textarea from './Textarea'
import Button from './Button'
import StyledDropzone from './StyledDropzone'

import saga from './saga'
import reducer from './reducer'
import injectReducer from '../../utils/injectReducer'
import injectSaga from '../../utils/injectSaga'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { addReport } from './actions'

class AddReport extends Component {
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
      <div>
        <Background onClick={this.handleClose} />

        <Modal>
          <H2>Add Report</H2>
          <P>Have any doubt on anything? Ask it to Factlist for proof.</P>

          <form onSubmit={this.handleOnSubmit}>
            <Textarea
              placeholder="Write lorem ipsum dolor sit amet."
              innerRef={(input) => this.textInput = input}
              value={this.state.text}
              onChange={this.handleTextChange}
            />

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

            <Button>ADD REPORT</Button>
          </form>
        </Modal>
      </div>
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
)(AddReport)
