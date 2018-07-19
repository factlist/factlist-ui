import {
  debounce,
  uniq,
  isEqual,
  indexOf,
} from 'lodash'

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

// Search for the specified value within an array and returns true or false.
const inArray = (array, value) => indexOf(array, value) !== -1

const getFileSize = (size) => {
  const i = Math.floor( Math.log(size) / Math.log(1024) )

  return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
}

export default {
  debounce,
  isEqual,
  uniq,
  randomId,
  parseUrl,
  isArray,
  inArray,
  getFileSize,
}
