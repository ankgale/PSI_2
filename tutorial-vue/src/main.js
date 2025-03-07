import { createApp } from "vue"
import App from './App.vue'
import './assets/main.css'
import { createPinia } from 'pinia'
const myapp = createApp(App)
const pinia = createPinia()
myapp.use(pinia)
myapp.mount('#app')
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



