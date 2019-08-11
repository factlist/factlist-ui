import {connect as refetchConnect} from 'react-refetch'
import {memoize, identity} from 'lodash'
import {getJWT} from './storage'
import {debounce} from '/lib/util'


const buildRequest = mapping => {
  const
    mapping_ = typeof mapping === 'string' ? {url: mapping} : mapping,
    {url, headers, body, ...opts} = mapping_

  return {
    ...opts,

    url: process.env.API_URL + url,

    headers: {
      ...headers,
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getJWT(),
    },

    body: body && JSON.stringify(body),
  }
}

const fetch_ = ({url, ...rest}) => fetch(url, rest)

const handleResponse = res =>
  res.text()
    .then(data =>
      Promise[res.ok ? 'resolve' : 'reject'](
        JSON.parse(data || null)
      )
    )

export const request = mapping =>
  fetch_(buildRequest(mapping))
    .then(handleResponse)

export const withFetch = refetchConnect.defaults({
  buildRequest,
  fetch: fetch_,
  handleResponse,
})

export const autoSuggestBase = (delay, minChars, extractor, url) => {
  const debouncedFetcher = debounce(
    q => request(url + q).then(extractor),
    delay
  )

  return q =>
    q.length < minChars
      ? Promise.resolve([])
      : debouncedFetcher(q)
}

export const autoSuggest = memoize(url =>
  autoSuggestBase(200, 2, identity, url)
)
