import React, { Component, Fragment } from 'react'
import { extractUrlsWithIndices } from 'twitter-text'
import _ from 'utils/_'
import Link from './Link'

export default class Linkify extends Component {
  prettifyUrl(url) {
    const { protocol, hostname } = _.parseUrl(url)
    const domain = `${protocol}//${hostname}`
    const tailLength = 15

    const willReplace = url.substr(domain.length + 1, url.length - domain.length - tailLength)

    return willReplace === '' ? url : url.replace(willReplace, '...')
  }

  getLink(url) {
    return <Link key={url + _.randomId()} target="_blank" href={url}>
      {this.prettifyUrl(url)}
    </Link>
  }

  parseText(text) {
    const extractedUrls = extractUrlsWithIndices(text)

    const elements = []

    let lastIndex = 0
    extractedUrls.forEach(extracted => {
      const url = extracted.url
      const [ start, end ] = extracted.indices

      if (start > lastIndex) {
        elements.push(text.substring(lastIndex, start))
      }

      elements.push(this.getLink(url))

      lastIndex = end
    })

    // Push remaining text if there is any
    if (text.length > lastIndex) {
      elements.push(text.substring(lastIndex))
    }

    return (elements.length === 1) ? elements[0] : elements
  }

  render() {
    const { children } = this.props

    return (
      <Fragment>
        {this.parseText(children)}
      </Fragment>
    )
  }
}
