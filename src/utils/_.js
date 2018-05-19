import {
  isEqual,
  debounce,
} from 'lodash'

// Random id generator
const randomId = () => Math.random().toString(36).substr(2, 12).toUpperCase()

// Parse URL
const parseUrl = url => {
  let parser = document.createElement('a')
  parser.href = url

  return parser
}

export default {
  isEqual,
  debounce,
  randomId,
  parseUrl,
}
