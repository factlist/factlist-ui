import {
  FETCH_EMBED_REQUEST,
  FETCH_EMBED_SUCCESS,
  FETCH_EMBED_FAILURE,
  EMBED_REMOVE,
  RESET_EVIDENCE_EMBEDS,
  RESET_CLAIM_EMBEDS,
} from './constants'

export const fetchEmbeds = ({ id, urls }) => ({
  type: FETCH_EMBED_REQUEST,
  id,
  urls,
})

export const embedFetched = ({ id, url, data }) => ({
  type: FETCH_EMBED_SUCCESS,
  id,
  url,
  data,
})

export const embedFetchFailure = ({ id, url }) => ({
  type: FETCH_EMBED_FAILURE,
  id,
  url,
})

export const removeEmbed = ({ id, url }) => ({
  type: EMBED_REMOVE,
  id,
  url,
})

export const resetClaimEmbeds = () => ({
  type: RESET_CLAIM_EMBEDS,
})

export const resetEvidenceEmbeds = () => ({
  type: RESET_EVIDENCE_EMBEDS,
})
