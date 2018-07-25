import {
  FETCH_CLAIMS_REQUEST,
  FETCH_CLAIMS_SUCCESS,
  FETCH_CLAIMS_FAILURE,

  FETCH_CLAIM_BY_ID_REQUEST,
  FETCH_CLAIM_BY_ID_SUCCESS,
  FETCH_CLAIM_BY_ID_FAILURE,

  ADD_CLAIM_REQUEST,
  ADD_CLAIM_SUCCESS,
  ADD_CLAIM_FAILURE,
  RESET_ADD_CLAIM_STATES,
} from './constants'

let page = 0
export const fetchClaimsRequest = () => ({
  type: FETCH_CLAIMS_REQUEST,
  page: ++page,
})

export const fetchClaimsSuccess = ({ claims, count, hasMore }) => ({
  type: FETCH_CLAIMS_SUCCESS,
  claims,
  count,
  hasMore,
})

export const fetchClaimsFailure = (error = null) => ({
  type: FETCH_CLAIMS_FAILURE,
  error,
})

export const fetchClaimByIdRequest = (id) => ({
  type: FETCH_CLAIM_BY_ID_REQUEST,
  id,
})

export const fetchClaimByIdSuccess = (claim) => ({
  type: FETCH_CLAIM_BY_ID_SUCCESS,
  claim,
})

export const fetchClaimByIdFailure = (error = null) => ({
  type: FETCH_CLAIM_BY_ID_FAILURE,
  error,
})

export const addClaimRequest = (data) => ({
  type: ADD_CLAIM_REQUEST,
  data,
})

export const addClaimSuccess = (claim) => ({
  type: ADD_CLAIM_SUCCESS,
  claim,
})

export const addClaimFailure = (error = null) => ({
  type: ADD_CLAIM_FAILURE,
  error,
})

export const resetAddClaimStates = () => ({
  type: RESET_ADD_CLAIM_STATES,
})
