/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import store from './store'
import flatpickr from "flatpickr";
 import 'flatpickr/dist/flatpickr.css';


const app = createApp(App)

registerPlugins(app)
app.mount('#app')
app.use(store)
app.use(flatpickr)
