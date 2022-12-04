import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
createApp(App).use(router).mount('#app')
