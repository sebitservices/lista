import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Importar Firebase para autenticación
import './firebase'

createApp(App)
  .use(router)
  .mount('#app')
