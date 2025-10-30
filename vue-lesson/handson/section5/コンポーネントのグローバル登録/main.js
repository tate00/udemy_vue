import { createApp } from 'vue'
import App from './App.vue'
import BaseIcon from './BaseIcon.vue'

const app = createApp(App)
app.component('BaseIcon', BaseIcon)
app.mount('#app')
