import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './assets/main.css'; // Importez votre fichier CSS personnalisé ici
import '@mdi/font/css/materialdesignicons.css'



const app = createApp(App)

app.use(createPinia())
app.use(router)
const vuetify = createVuetify({
    components,
    directives,
})

app.use(vuetify).mount('#app')

