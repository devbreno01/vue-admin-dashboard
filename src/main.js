import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'; 
import 'primeicons/primeicons.css'; 
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import '../src/style.css'; 

const app = createApp(App);

app.use(router)

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})

app.mount('#app')
