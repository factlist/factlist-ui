import React, { Component } from 'react'
import Container from './Container'
import Editor from 'draft-js-plugins-editor'
import { EditorState } from 'draft-js'
import LinkifyPlugin from './LinkifyPlugin'
import _ from 'utils/_'
import getUrls from 'get-urls'

import 'draft-js/dist/Draft.css'

export default class Input extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    plainText: '',
    urls: []
  }

  onChange = this.onChange.bind(this)
  focus = this.focus.bind(this)
  catchUrls = _.debounce(this.catchUrls, 500)

  onChange(editorState) {
    this.setState({
      editorState,
      plainText: editorState.getCurrentContent().getPlainText(),
    })

    this.catchUrls()
  }

  catchUrls(content) {
    const { onLinks } = this.props
    const { urls, plainText } = this.state
    const matchedUrls = Array.from(getUrls(plainText, {
      stripWWW: false,
      stripFragment: false,
    }))

    if (!_.isEqual(matchedUrls, urls)) {
      this.setState({ urls: matchedUrls })
      onLinks(matchedUrls)
    }
  }

  focus() {
    this.editor.focus()
  }

  render() {
    return (
      <Container onClick={this.focus}>
        <Editor
          placeholder="Description or URL"
          ref={node =>  this.editor = node }
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={[ LinkifyPlugin() ]} />
      </Container>
    )
  }
}
