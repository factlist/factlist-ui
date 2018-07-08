import {
  FILE_UPLOAD_REQUEST,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAILURE,
  REMOVE_FILE_REQUEST,
  RESET_CLAIM_FILES,
  RESET_EVIDENCE_FILES,
} from './constants'

export const fileUpload = ({ form, file }) => ({
  type: FILE_UPLOAD_REQUEST,
  form,
  file,
})

export const fileUploadSuccess = ({ form, file, id, url }) => ({
  type: FILE_UPLOAD_SUCCESS,
  form,
  file,
  id,
  url,
})

export const removeFile = ({ form, file }) => ({
  type: REMOVE_FILE_REQUEST,
  form,
  file,
})

export const fileUploadFailure = () => ({
  type: FILE_UPLOAD_FAILURE,
})

export const resetClaimFiles = () => ({
  type: RESET_CLAIM_FILES,
})

export const resetEvidenceFiles = () => ({
  type: RESET_EVIDENCE_FILES,
})
