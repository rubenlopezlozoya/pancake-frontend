import axios from 'axios'

export default axios.create({
  baseURL: 'https://7fz94bfuh3.execute-api.eu-west-3.amazonaws.com/default',
  headers: {
    'Content-type': 'application/json',
  },
})
