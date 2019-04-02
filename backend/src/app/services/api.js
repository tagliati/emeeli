import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.mercadolibre.com/',
  timeout: 2000,
  headers: { 'Content-Type': 'application/json' }
})

export default api
