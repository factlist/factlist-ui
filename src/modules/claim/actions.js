import {
  FETCH_CLAIM_REQUEST,
  FETCH_CLAIM_SUCCESS,

  FETCH_ALL_CLAIMS_REQUEST,
  FETCH_ALL_CLAIMS_SUCCESS,
  FETCH_ALL_CLAIMS_FAILURE,

  ADD_CLAIM_REQUEST,
  ADD_CLAIM_SUCCESS,
} from './constants'

export const fetchClaim = ({ id }) => ({
  type: FETCH_CLAIM_REQUEST,
  id
})

export const claimFetched = (data) => ({
  type: FETCH_CLAIM_SUCCESS,
  data
})

export const fetchClaims = () => ({
  type: FETCH_ALL_CLAIMS_REQUEST
})

export const claimsFetched = (claims) => ({
  type: FETCH_ALL_CLAIMS_SUCCESS,
  claims
})

export const fetchClaimsFailure = () => ({
  type: FETCH_ALL_CLAIMS_FAILURE
})

export const addClaim = (data) => ({
  type: ADD_CLAIM_REQUEST,
  data
})

export const claimAdded = (data) => ({
  type: ADD_CLAIM_SUCCESS,
  data
})

export const reportAdded = () => ({
  type: ADD_CLAIM_SUCCESS
})
