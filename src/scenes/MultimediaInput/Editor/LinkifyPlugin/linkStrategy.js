import getUrls from 'get-urls'
import escapeStringRegexp from 'escape-string-regexp'

export default (contentBlock, callback) => {
  const text = contentBlock.get('text')
  const urls = Array.from(getUrls(text, {
    stripWWW: false,
    stripFragment: false,
  }))

  urls.forEach(url => {
    const regExp = new RegExp(escapeStringRegexp(url), 'g')

    let match = ''
    while ((match = regExp.exec(text)) !== null) {
      callback(match.index, match.index + url.length)
    }
  })
}
