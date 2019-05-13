import {connect} from 'react-refetch'
import {getToken} from 'utils/storage'
import mapValues from 'lodash/mapValues'
import noop from 'lodash/noop'


const buildRequest = ({url, headers, body, ...rest}) => ({
  url: process.env.REACT_APP_API_ENDPOINT + url,
  headers: {
    Authorization: 'Token ' + getToken(),
    ...headers,
  },
  body: JSON.stringify(body),
  ...rest,
})

const fetch_ = ({url, ...rest}) => fetch(url, rest)

const handleResponse = resp =>
  resp.text()
    .then(data => {
      const parsed = JSON.parse(data || {})

      return resp.ok
        ? Promise.resolve(parsed)
        : Promise.reject(parsed)
    })

export const withFetch = connect.defaults({
  buildRequest,
  fetch: fetch_,
  handleResponse,
})

export const formFetch = fetchFactory => (vals, formikBag) =>
  mapValues(
    fetchFactory(vals, formikBag),

    fetchSpec => ({
      force: true,

      ...fetchSpec,

      then: data => {
        formikBag.setSubmitting(false)
        ;(fetchSpec.then || noop)(data)
      },

      catch: errors => {
        formikBag.setErrors(errors)
        formikBag.setSubmitting(false)
        ;(fetchSpec.catch || noop)(errors)
      },
    })
  )
