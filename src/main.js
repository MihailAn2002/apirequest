import { createApp } from 'vue' ;
import { createPinia } from 'pinia';


import App from './App.vue'

const pinia = createPinia() ;

const app = createApp(App);

app.use(pinia)
app.use(createPinia());
app.mount('#app');
createApp(App).mount('#app');
