import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import { createSelector } from 'reselect'
import { makeSelectAll } from 'modules/embed/selectors'
import { connect } from 'react-redux'
import { fetchEmbed, removeEmbed } from 'modules/embed/actions'
import Container from './Container'
import Editor from './Editor'
import EmbedPreview from './EmbedPreview'
import FileSelector from './FileSelector'
import Seperator from './Seperator'
import Label from './Label'
import FileSwitch from './FileSwitch'

class MultimediaInput extends Component {
  static defaultProps = {
    placeholder: '',
  }

  static propTypes = {
    placeholder: propTypes.string,
    onUrlsChange: propTypes.func.isRequired,
    onFilesChange: propTypes.func.isRequired,
  }

  state = {
    files: [],
    embeds: {},
  }

  editor = null

  onUrlsChange = this.onUrlsChange.bind(this)
  onEmbedRemove = this.onEmbedRemove.bind(this)
  onFilesChange = this.onFilesChange.bind(this)
  showFileSelector = this.showFileSelector.bind(this)
  reset = this.reset.bind(this)


  onUrlsChange(urls) {
    const { fetchEmbed } = this.props

    this.setState({ urls })
    urls.forEach(url => fetchEmbed(url))
  }

  onEmbedRemove(embed) {
    const { removeEmbed } = this.props

    removeEmbed(embed.url)

    // Remove URL from editor
    this.editor.removeURL(embed.url)
  }

  onFilesChange(files) {
    const { onFilesChange } = this.props

    this.setState({ files })

    onFilesChange(files)
  }

  showFileSelector() {
    this.fileSelector.open()
  }

  reset() {
    this.editor.reset()
    this.fileSelector.reset()
  }

  render() {
    const { placeholder, embeds } = this.props
    const { files } = this.state

    console.log('@@', 'parent')

    return (
      <Container>
        <Editor
          placeholder={placeholder}
          ref={ref => this.editor = ref}
          onUrlsChange={this.onUrlsChange} />

        {embeds.length === 0 &&
          files.length === 0 &&
          <FileSwitch onClick={this.showFileSelector} />}

        {(files.length > 0 || embeds.length > 0) && <Seperator />}

        {embeds.length > 0 && (
          <Fragment>
            <Label>Links:</Label>
            <EmbedPreview
              embeds={embeds}
              onRemove={this.onEmbedRemove} />
          </Fragment>
        )}

        <FileSelector
          show={embeds.length > 0 || files.length > 0}
          ref={node => this.fileSelector = node}
          onChange={this.onFilesChange} />

      </Container>
    )
  }
}

const mapStateToProps = createSelector(
  makeSelectAll(),
  (embeds) => ({ embeds }),
)

const mapDispatchToProps = (dispatch) => ({
  fetchEmbed: (url) => dispatch(fetchEmbed(url)),
  removeEmbed: (url) => dispatch(removeEmbed(url)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultimediaInput)
