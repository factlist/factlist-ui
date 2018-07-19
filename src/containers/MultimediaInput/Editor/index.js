import React, { Component } from 'react'
import Container from './Container'
import { Editor, CompositeDecorator, EditorState, ContentState } from 'draft-js'
import _ from 'utils/_'
import LinkifyDecorator from './LinkifyDecorator'
import { extractUrls, extractUrlsWithIndices } from 'twitter-text'
import 'draft-js/dist/Draft.css'

// Decorators
const compositeDecorator = new CompositeDecorator([
  LinkifyDecorator,
])

export default class CustomEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(compositeDecorator),
    urls: [],
  }

  onChange = this.onChange.bind(this)
  getPlainText = this.getPlainText.bind(this)
  catchUrls = _.debounce(this.catchUrls, 500)
  focus = this.focus.bind(this)
  reset = this.reset.bind(this)

  getPlainText() {
    const { editorState } = this.state

    return editorState.getCurrentContent().getPlainText()
  }

  onChange(editorState) {
    this.setState({ editorState })

    // Catch unique urls with debounce
    this.catchUrls()

    const { onTextChange } = this.props
    onTextChange(editorState.getCurrentContent().getPlainText())
  }

  catchUrls(content) {
    const { onUrlsChange } = this.props
    const plainText = this.getPlainText()
    const urls = _.uniq(extractUrls(plainText))

    if (!_.isEqual(urls, this.state.urls)) {
      this.setState({ urls }, () => onUrlsChange(urls))
    }
  }

  removeURL(url) {
    const { editorState } = this.state

    let text = this.getPlainText()

    extractUrlsWithIndices(text)
      .filter(extracted => extracted.url === url)
      .reverse()
      .forEach(url => {
        text = text.substring(0, url.indices[0]) + text.substring(url.indices[1])
      })

    const contentState = ContentState.createFromText(text.trim())

    this.setState({
      editorState: EditorState.push(editorState, contentState)
    })
  }

  focus() {
    this.editor.focus()
  }

  reset() {
    this.setState({
      editorState: EditorState.createEmpty()
    })
  }

  render() {
    const { editorState } = this.state
    const {
      placeholder,
      onFocus,
    } = this.props

    return (
      <Container onClick={this.focus}>
        <Editor
          placeholder={placeholder}
          ref={node => this.editor = node }
          stripPastedStyles={true}
          editorState={editorState}
          onChange={this.onChange}
          onFocus={onFocus} />
      </Container>
    )
  }
}
