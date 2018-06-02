import React, { Component } from 'react'
import Container from './Container'
import Editor from 'draft-js-plugins-editor'
import { EditorState, ContentState } from 'draft-js'
import _ from 'utils/_'
import LinkifyPlugin from './LinkifyPlugin'
import { getUniqueUrls, getUrlsWithIndex } from './getUrls'

import 'draft-js/dist/Draft.css'

export default class Input extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    urls: [],
  }

  onChange = this.onChange.bind(this)
  focus = this.focus.bind(this)
  reset = this.reset.bind(this)
  catchUrls = _.debounce(this.catchUrls, 500)

  onChange(editorState) {
    this.setState({ editorState })

    // It will catch unique urls with debounce
    this.catchUrls()

    const { onTextChange } = this.props
    onTextChange(editorState.getCurrentContent().getPlainText())
  }

  catchUrls(content) {
    const { onUrlsChange } = this.props
    const { urls, editorState } = this.state
    const plainText = editorState.getCurrentContent().getPlainText()
    const uniqueUrls = getUniqueUrls(plainText)

    if (!_.isEqual(uniqueUrls, urls)) {
      this.setState({ urls: uniqueUrls })
      onUrlsChange(uniqueUrls)
    }
  }

  removeURL(url) {
    const { editorState } = this.state

    let text = editorState.getCurrentContent().getPlainText()

    getUrlsWithIndex(text)
      .filter(urlRange => urlRange.url === url)
      .reverse()
      .forEach(url => {
        text = text.substring(0, url.start) + text.substring(url.end)
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
    const { placeholder } = this.props

    return (
      <Container onClick={this.focus}>
        <Editor
          placeholder={placeholder}
          ref={node =>  this.editor = node }
          stripPastedStyles={true}
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={[ LinkifyPlugin() ]} />
      </Container>
    )
  }
}
