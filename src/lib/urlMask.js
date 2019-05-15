import {parseUrl} from './_'


export default (url) => {
  const { protocol, hostname } = parseUrl(url)
  const domain = `${protocol}//${hostname}`

  return url || hostname.replace('www.', '') + url.substr(domain.length, 6) + '...'
}
