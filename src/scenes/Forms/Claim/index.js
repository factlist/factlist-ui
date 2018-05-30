import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addClaim } from 'modules/claim/actions'
import MultimediaInput from 'scenes/MultimediaInput'
import H2 from './H2'
import P from './P'
import Button from './Button'
import Container from './Container'

class ClaimForm extends Component {
  state = {
    text: '',
    files: [],
    links: [],
  }

  onUrlsChange = this.onUrlsChange.bind(this)
  onFilesChange = this.onFilesChange.bind(this)
  onTextChange = this.onTextChange.bind(this)
  handleOnSubmit = this.handleOnSubmit.bind(this)

  onUrlsChange(urls) {
    this.setState({ links: urls })
  }

  onFilesChange(files) {
    this.setState({ files })
  }

  onTextChange(text) {
    this.setState({ text })
  }

  handleOnSubmit(event) {
    event.preventDefault()

    const { addClaim } = this.props

    addClaim(this.state)
  }

  render() {
    const { user, adding } = this.props

    return (
      <Container>
        <H2>Add Claim</H2>
        <P>Have any doubt on anything? Ask it to Factlist for proof.</P>

        <form onSubmit={this.handleOnSubmit}>
          <MultimediaInput
            ref={node => this.multimediaInput = node}
            onUrlsChange={this.onUrlsChange}
            onFilesChange={this.onFilesChange}
            onTextChange={this.onTextChange}
            user={user} />

          <Button disabled={adding}>
            {adding ? 'Adding...' : 'Add Claim'}
          </Button>
        </form>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  adding: state.claim.adding,
})

const mapDispatchToProps = (dispatch) => ({
  addClaim: (data) => dispatch(addClaim(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClaimForm)
