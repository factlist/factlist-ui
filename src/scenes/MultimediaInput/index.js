import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchEmbeds, removeEmbed } from 'modules/embed/actions'
import Container from './Container'
import Editor from './Editor'
import EmbedPreview from './EmbedPreview'
import FileSelector from './FileSelector'
import Seperator from './Seperator'
import Label from './Label'
import FileSwitch from './FileSwitch'

const MAX_EMBEDS_ALLOWED = 6

class MultimediaInput extends Component {
  static defaultProps = {
    placeholder: '',
  }

  state = {
    urls: [],
    files: [],
    embeds: {},
  }

  editor = null

  onUrlsChange = this.onUrlsChange.bind(this)
  onEmbedRemove = this.onEmbedRemove.bind(this)
  onFilesChange = this.onFilesChange.bind(this)
  reset = this.reset.bind(this)

  onUrlsChange(urls) {
    const { fetchEmbeds } = this.props

    fetchEmbeds(urls.slice(0, MAX_EMBEDS_ALLOWED))
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

  reset() {
    this.editor.reset()
    this.fileSelector.reset()
  }

  render() {
    const {
      placeholder,
      files,
      embeds,
      onTextChange,
    } = this.props

    return (
      <Container>
        <Editor
          placeholder={placeholder}
          ref={node => this.editor = node}
          onUrlsChange={this.onUrlsChange}
          onTextChange={onTextChange} />

        {embeds.length === 0 &&
          files.length === 0 &&
          <FileSwitch />}

        {(files.length > 0 || embeds.length > 0) && <Seperator />}

        {embeds.length > 0 && (
          <Fragment>
            <Label>Links:</Label>
            <EmbedPreview
              embeds={embeds}
              onRemove={this.onEmbedRemove} />
          </Fragment>
        )}

        {(files.length !== 0 || embeds.length !== 0) &&
        <FileSelector files={files} />}
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  embeds: state.embed.all,
  files: state.file.all,
})

const mapDispatchToProps = (dispatch) => ({
  fetchEmbeds: urls => dispatch(fetchEmbeds(urls)),
  removeEmbed: url => dispatch(removeEmbed(url)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultimediaInput)
