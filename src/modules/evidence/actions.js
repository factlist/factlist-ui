import {
  ADD_EVIDENCE_REQUEST,
  ADD_EVIDENCE_SUCCESS,
  ADD_EVIDENCE_FAILURE
} from './constants'

export const addEvidence = ({ claimId, payload }) => ({
  type: ADD_EVIDENCE_REQUEST,
  claimId,
  payload,
})

export const evidenceAdded = () => ({
  type: ADD_EVIDENCE_SUCCESS
})

export const addEvidenceFailure = () => ({
  type: ADD_EVIDENCE_FAILURE,
})
