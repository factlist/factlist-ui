import { takeEvery, fork, select, put } from 'redux-saga/effects'
import config from 'config'
import axios from 'axios'
import { FILE_UPLOAD_REQUEST } from './constants'
import { fileUploadSuccess } from './actions'

const upload = function* (action) {
  try {
    const formData = new FormData()
    formData.append('image', action.file)

    // Get current user's token
    const token = yield select(state => state.auth.token)

    // API request
    const response = yield axios.post(`${config.API_ENDPOINT}/files/`, formData, {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    yield put(fileUploadSuccess({
      file: action.file,
      id: response.data.id,
      url: response.data.image,
    }))
  } catch (error) {
    // @TODO Handle error
  }
}

export const watchUpload = function* () {
  yield takeEvery(FILE_UPLOAD_REQUEST, upload)
}

export default fork(watchUpload)
