import {
  ADD_EVIDENCE_REQUEST,
  ADD_EVIDENCE_SUCCESS,
  ADD_EVIDENCE_FAILURE
} from './constants'

export const addEvidence = (data) => ({
  type: ADD_EVIDENCE_REQUEST,
  data
})

export const evidenceAdded = () => ({
  type: ADD_EVIDENCE_SUCCESS
})
