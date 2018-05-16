import tlds from 'tlds'

export default opts => {
  opts = Object.assign({strict: true}, opts)

	const protocol = `(?:(?:[a-z]+:)?//)${opts.strict ? '' : '?'}`
	const auth = '(?:\\S+(?::\\S*)?@)?'
	const host = '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)'
	const domain = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*'
	const tld = `(?:\\.${opts.strict ? '(?:[a-z\\u00a1-\\uffff]{2,})' : `(?:${tlds.sort((a, b) => b.length - a.length).join('|')})`})\\.?`
	const port = '(?::\\d{2,5})?'
	const path = '(?:[/?#][^\\s"]*)?'
	const regex = `(?:${protocol}|www\\.)${auth}(?:localhost|${host}${domain}${tld})${port}${path}`

  return opts.exact ? new RegExp(`(?:^${regex}$)`, 'i') : new RegExp(regex, 'ig')
}
