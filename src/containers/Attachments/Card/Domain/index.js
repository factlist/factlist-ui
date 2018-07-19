import React from 'react'
import _ from 'utils/_'
import Span from './Span'

const getHostname = (url) => {
  const matches = _.parseUrl(url)
  const hostname = matches.hostname

  return hostname.replace('www.', '')
}

export default ({ url }) => (
  <Span>{getHostname(url)}</Span>
)
