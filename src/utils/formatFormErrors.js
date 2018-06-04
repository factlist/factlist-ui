import _ from 'utils/_'

// Prepare errors for redux-form
export default (errors) => {
  return Object.keys(errors).reduce((list, key) => {
    list[key] = _.isArray(errors[key]) ? errors[key][0] : errors[key]

    return list
  }, {})
}
