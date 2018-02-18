import {
  FETCH_CLAIMS,
  FETCH_CLAIMS_SUCCESS,
  FETCH_CLAIMS_FAILURE
} from './constants'

export const fetchClaims = () => ({
  type: FETCH_CLAIMS
})

export const claimsFetched = (claims) => ({
  type: FETCH_CLAIMS_SUCCESS,
  claims
})

export const fetchClaimsFailure = () => ({
  type: FETCH_CLAIMS_FAILURE
})
