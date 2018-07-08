import { takeEvery, fork, select, put } from 'redux-saga/effects'
import config from 'config'
import axios from 'axios'
import { FILE_UPLOAD_REQUEST } from './constants'
import { fileUploadSuccess } from './actions'

const upload = function* (action) {
  const { form, file } = action

  try {
    const formData = new FormData()
    formData.append('image', file)

    // Get current user's token
    const token = yield select(state => state.auth.token)

    // API request
    const response = yield axios.post(`${config.API_ENDPOINT}/files/`, formData, {
      headers: {
        Authorization: `Token ${token}`
      },
    })

    const { id, image } = response.data

    // @TODO API return image instead of url.
    // API should change this key.
    yield put(fileUploadSuccess({
      form,
      file,
      id,
      url: image,
    }))
  } catch (error) {
    // @TODO Handle error
  }
}

export const watchUpload = function* () {
  yield takeEvery(FILE_UPLOAD_REQUEST, upload)
}

export default fork(watchUpload)
