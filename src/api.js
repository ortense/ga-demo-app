import axios from 'axios'

const client = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' })

client.interceptors.request.use((config) => {
  config.metadata = { startTime: Date.now()}
  return config
}, error => Promise.reject(error))

client.interceptors.response.use((response) => {
  gtag('event', 'timing_complete', {
    name : response.config.url,
    value: Date.now() - response.config.startTime,
    event_category : 'api request',
    event_label: 'success'
  })

  return response
}, (error) => {
  gtag('event', 'timing_complete', {
    name : error.config.url,
    value: Date.now() - error.config.startTime,
    event_category : 'api request',
    event_label: 'fail',
  })
  return Promise.reject(error)
})

export function getRandomTodo() {
  return client
    .get(`/todos/${Math.floor(Math.random() * 350)}`)
    .then(response => response.data)
}
