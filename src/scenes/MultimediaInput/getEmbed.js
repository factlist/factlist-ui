import config from 'config'
import axios from 'axios'

export default (url) => new Promise(resolve => {
  axios
    .get(`${config.API_ENDPOINT}/embed/?link=${url}`)
    .then(response => response.data)
    .then(data => resolve(data))
    .catch(error => resolve(null))
})
