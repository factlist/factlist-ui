import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addReport } from 'modules/claim/actions'
import H2 from './H2'
import P from './P'
import Textarea from './Textarea'
import Button from './Button'
import StyledDropzone from './StyledDropzone'
import FilePreview from 'components/FilePreview'
import Container from './Container'

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
  onRemoveFile = this.onRemoveFile.bind(this)

  componentDidMount() {
    this.textInput.focus()
  }

  handleClose() {
    const { onClose } = this.props

    onClose()
  }

  handleOnDrop(files) {
    this.setState({ files })
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

  onRemoveFile(file) {
    this.setState({
      files: this.state.files.filter(selectedFile => selectedFile.name !== file.name)
    })
  }

  render() {
    const { files } = this.state

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

          <FilePreview
            files={files}
            onRemove={this.onRemoveFile} />

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
  loading: state.claim.loading,
  error: state.claim.error
})

const mapDispatchToProps = (dispatch) => ({
  addReport: (data) => dispatch(addReport(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClaimForm)
