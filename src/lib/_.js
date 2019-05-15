export const parseUrl = url => {
  let parser = document.createElement('a')
  parser.href = url

  return parser
}

export const isArray = value =>
  Object.prototype.toString.call(value) === '[object Array]'
