import {request} from './request'
import {memoize} from 'lodash-es'


const getApiDescription = memoize(() => request('/documentation/json'))

export default getApiDescription
