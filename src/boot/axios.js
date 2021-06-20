import { boot } from 'quasar/wrappers'
import axios from 'axios'
axios.defaults.withCredentials = true

const api = axios.create({ baseURL: 'https://todo-api.quasarcast.com' })

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios

  app.config.globalProperties.$api = api
})

export { api }
