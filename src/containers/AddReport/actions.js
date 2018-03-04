import {
  ADD_REPORT_REQUEST,
  ADD_REPORT_SUCCESS
} from './constants'

export const addReport = (data) => ({
  type: ADD_REPORT_REQUEST,
  data
})

export const reportAdded = () => ({
  type: ADD_REPORT_SUCCESS
})
