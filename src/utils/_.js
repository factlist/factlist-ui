import {
  isEqual,
  debounce,
  map,
} from 'lodash'

// Random id generator
const randomId = () => Math.random().toString(36).substr(2, 12).toUpperCase()

export default {
  isEqual,
  map,
  debounce,
  randomId,
}
