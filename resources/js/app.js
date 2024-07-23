require('./bootstrap')

import { createApp } from 'vue'
import router from './router'

const app = createApp({})

app.config.globalProperties.$filters = {
    money(value) {
      return parseFloat(value).toFixed(2)
    }
  }

app.use(router)

app.mount('#app')