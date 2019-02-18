import _ from 'utils/_'

export default (url) => {
  const { protocol, hostname } = _.parseUrl(url)
  const domain = `${protocol}//${hostname}`

  return url || hostname.replace('www.', '') + url.substr(domain.length, 6) + '...'
}
