import axios from 'axios'

export default (path, conf) => axios({
    ...conf,
    url: process.env.REACT_APP_API_ENDPOINT + path,
})
