import React, { Component } from 'react'
import styled from 'styled-components'
import { getUniqueUrls } from '../getUrls'

const A = styled.a`
  color: #1B95E0;
  text-decoration: none;
  cursor: text;
`

// The component we render when we encounter a hyperlink in the text
export default class Link extends Component {
  render() {
    const {
      decoratedText = '',
      target = '_blank',
      rel = 'noreferrer noopener',
      className,
      theme = {}, // eslint-disable-line no-unused-vars
      dir, // eslint-disable-line no-unused-vars
      entityKey, // eslint-disable-line no-unused-vars
      getEditorState, // eslint-disable-line no-unused-vars
      offsetKey, // eslint-disable-line no-unused-vars
      setEditorState, // eslint-disable-line no-unused-vars
      contentState, // eslint-disable-line no-unused-vars
      ...otherProps
    } = this.props

    const links = getUniqueUrls(decoratedText)
    const href = links && links[0] ? links[0] : ''

    const props = {
      ...otherProps,
      href,
      target,
      rel,
      className,
    }

    return <A {...props} /> // eslint-disable-line jsx-a11y/anchor-has-content
  }
}
