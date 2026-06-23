import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'; 
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import '../src/style.css'; 


createApp(App)
    .use(router)
    .use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    .mount('#app')
