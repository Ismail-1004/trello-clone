import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './app/App.vue'
import router from '@/app/router'

import './app/assets/main.scss'

const app = createApp(App)

app.use(Quasar, {
    plugins: {}
})
app.use(createPinia())
app.use(router)

app.mount('#app')
