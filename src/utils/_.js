import {
  debounce,
  isEqual,
} from 'lodash'

const lodash = require('lodash')
window.lodash = lodash

// Random id generator
const randomId = () => Math.random().toString(36).substr(2, 12).toUpperCase()

// Parse URL
const parseUrl = url => {
  let parser = document.createElement('a')
  parser.href = url

  return parser
}

// Determine whether the passed value is an Array.
const isArray = (value) => Object.prototype.toString.call(value) === '[object Array]'

export default {
  debounce,
  isEqual,
  randomId,
  parseUrl,
  isArray,
}
