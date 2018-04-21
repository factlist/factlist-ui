import {
  FETCH_CLAIMS_REQUEST,
  FETCH_CLAIMS_SUCCESS,
  FETCH_CLAIMS_FAILURE,

  ADD_CLAIM_REQUEST,
  ADD_CLAIM_SUCCESS
} from './constants'

export const fetchClaims = () => ({
  type: FETCH_CLAIMS_REQUEST
})

export const claimsFetched = (claims) => ({
  type: FETCH_CLAIMS_SUCCESS,
  claims
})

export const fetchClaimsFailure = () => ({
  type: FETCH_CLAIMS_FAILURE
})

export const addReport = (data) => ({
  type: ADD_CLAIM_REQUEST,
  data
})

export const reportAdded = () => ({
  type: ADD_CLAIM_SUCCESS
})
