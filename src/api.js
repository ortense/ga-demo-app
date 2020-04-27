import axios from 'axios'

const client = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' })

client.interceptors.request.use(function (config) {
  config.metadata = { startTime: Date.now()}
  return config;
}, function (error) {
  return Promise.reject(error);
})

client.interceptors.response.use(function (response) {
  const value = Date.now() - response.config.metadata.startTime
  gtag('event', 'timing_complete', {
    name : response.config.url,
    value,
    event_category : 'api request',
    event_label: 'success'
  });
  return response;
}, function (error) {
  const value = Date.now() - error.config.metadata.startTime;

  gtag('event', 'timing_complete', {
    name : error.config.url,
    value,
    event_category : 'api request',
    event_label: 'fail',
  });
  return Promise.reject(error);
});

export function getRandomTodo() {
  return client
    .get(`/todos/${Math.floor(Math.random() * 350)}`)
    .then(response => response.data)
}
