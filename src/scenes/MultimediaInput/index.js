import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import config from 'config'
import axios from 'axios'
import Container from './Container'
import Editor from './Editor'
import EmbedPreview from './EmbedPreview'
import FileSelector from './FileSelector'
import Seperator from './Seperator'
import Label from './Label'
import FileSwitch from './FileSwitch'

export default class MultimediaInput extends Component {
  static defaultProps = {
    placeholder: '',
  }

  static propTypes = {
    placeholder: propTypes.string,
    user: propTypes.object.isRequired,
    onUrlsChange: propTypes.func.isRequired,
    onFilesChange: propTypes.func.isRequired,
    onTextChange: propTypes.func.isRequired,
  }

  state = {
    urls: [],
    files: [],
    embeds: {},
  }

  editor = null

  onUrlsChange = this.onUrlsChange.bind(this)
  getEmbed = this.getEmbed.bind(this)
  onEmbedRemove = this.onEmbedRemove.bind(this)
  onFilesChange = this.onFilesChange.bind(this)
  showFileSelector = this.showFileSelector.bind(this)
  reset = this.reset.bind(this)

  onUrlsChange(urls) {
    const { onUrlsChange } = this.props

    this.setState({ urls })
    urls.forEach(url => this.getEmbed(url))

    onUrlsChange(urls)
  }

  getEmbed(url) {
    const embeds = this.state.embeds
    const embed = embeds[url]

    if (embed || (embed && embed.requesting === true)) {
      return null
    }

    // Default embed values
    embeds[url] = {
      url,
      requesting: true,
      data: null
    }

    this.setState({ embeds })

    this.embedRequest(url).then(data => {
      embeds[url] = {
        url,
        requesting: false,
        error: data ? false : true,
        data,
      }

      this.setState({ embeds })
    })
  }

  embedRequest(url) {
    const { user } = this.props
    const { token } = user

    return new Promise(resolve => {
      axios
        .get(`${config.API_ENDPOINT}/embed/?link=${url}`, {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then(response => response.data)
        .then(data => resolve(data))
        .catch(() => resolve(null))
    })
  }

  onEmbedRemove(embed) {
    const { onUrlsChange } = this.props
    const urls = this.state.urls.filter(url => embed.url !== url)

    this.setState({ urls })

    this.editor.removeURL(embed.url)

    onUrlsChange(urls)
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
    const { placeholder, onTextChange } = this.props
    let { embeds, urls, files } = this.state
    embeds = urls
      .map(url => embeds[url])
      .filter(embed => typeof embed !== 'undefined')

    return (
      <Container>
        <Editor
          placeholder={placeholder}
          ref={ref => this.editor = ref}
          onUrlsChange={this.onUrlsChange}
          onTextChange={onTextChange} />

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
