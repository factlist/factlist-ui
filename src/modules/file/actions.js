import {
  FILE_UPLOAD_REQUEST,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAILURE,
  REMOVE_FILE_REQUEST,
} from './constants'

export const fileUpload = (file) => ({
  type: FILE_UPLOAD_REQUEST,
  file,
})

export const fileUploadSuccess = ({ file, id, url }) => ({
  type: FILE_UPLOAD_SUCCESS,
  file,
  id,
  url,
})

export const removeFile = (file) => ({
  type: REMOVE_FILE_REQUEST,
  file,
})

export const fileUploadFailure = () => ({
  type: FILE_UPLOAD_FAILURE,
})
