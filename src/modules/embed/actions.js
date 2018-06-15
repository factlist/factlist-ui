import {
  FETCH_EMBED_REQUEST,
  FETCH_EMBED_SUCCESS,
  FETCH_EMBED_FAILURE,
  REMOVE_EMBED,
} from './constants'

export const fetchEmbed = (url) => ({
  type: FETCH_EMBED_REQUEST,
  url,
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
  type: REMOVE_EMBED,
  url,
})
