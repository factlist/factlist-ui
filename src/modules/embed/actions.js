import {
  FETCH_EMBED_REQUEST,
  FETCH_EMBED_SUCCESS,
  FETCH_EMBED_FAILURE,
  EMBED_REMOVE,
} from './constants'

export const fetchEmbeds = (urls) => ({
  type: FETCH_EMBED_REQUEST,
  urls,
})

export const embedFetched = ({ url, data }) => ({
  type: FETCH_EMBED_SUCCESS,
  url,
  data,
})

export const embedFetchFailure = (url) => ({
  type: FETCH_EMBED_FAILURE,
  url,
})

export const removeEmbed = (url) => ({
  type: EMBED_REMOVE,
  url,
})
