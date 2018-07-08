import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchEmbeds, removeEmbed } from 'modules/embed/actions'
import { fileUpload, removeFile } from 'modules/file/actions'
import Container from './Container'
import Editor from './Editor'
import EmbedPreview from './EmbedPreview'
import FileSelector from './FileSelector'
import Seperator from './Seperator'
import Label from './Label'
import FileSwitch from './FileSwitch'

const MAX_EMBEDS_ALLOWED = 6
const MAX_FILES_ALLOWED = 5

class MultimediaInput extends Component {
  static defaultProps = {
    placeholder: '',
  }

  state = {
    urls: [],
  }

  editor = null

  onUrlsChange = this.onUrlsChange.bind(this)
  onEmbedRemove = this.onEmbedRemove.bind(this)
  onFilesDrop = this.onFilesDrop.bind(this)
  onFileRemove = this.onFileRemove.bind(this)

  onFilesDrop(selectedFiles) {
    const { uploadFile, id, files } = this.props

    selectedFiles
      .slice(0, MAX_FILES_ALLOWED - files.length)
      .forEach(file => uploadFile({ form: id, file }))
  }

  onFileRemove(file) {
    const { id, removeFile } = this.props

    removeFile({ form: id, file })
  }

  onUrlsChange(urls) {
    const { id, fetchEmbeds } = this.props

    fetchEmbeds({
      id,
      urls: urls.slice(0, MAX_EMBEDS_ALLOWED)
    })
  }

  onEmbedRemove(embed) {
    const { id, removeEmbed } = this.props

    removeEmbed({
      id,
      url: embed.url
    })

    // Remove URL from editor
    this.editor.removeURL(embed.url)
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
          <FileSwitch onDrop={this.onFilesDrop} />}

        {(files.length > 0 || embeds.length > 0) && <Seperator />}

        {embeds.length > 0 && (
          <Fragment>
            <Label>Links:</Label>
            <EmbedPreview
              embeds={embeds}
              onRemove={this.onEmbedRemove} />
          </Fragment>
        )}

        {(files.length !== 0 || embeds.length !== 0) && (
          <Fragment>
            <Label>Files:</Label>
            <FileSelector
              files={files}
              maxFileAllowed={MAX_FILES_ALLOWED}
              onDrop={this.onFilesDrop}
              onRemove={this.onFileRemove} />
          </Fragment>
        )}
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => ({
  embeds: state.embed[props.id],
  files: state.file[props.id],
})

const mapDispatchToProps = (dispatch) => ({
  fetchEmbeds: urls => dispatch(fetchEmbeds(urls)),
  removeEmbed: url => dispatch(removeEmbed(url)),
  uploadFile: ({ form, file }) => dispatch(fileUpload({ form, file })),
  removeFile: ({ form, file }) => dispatch(removeFile({ form, file })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultimediaInput)
