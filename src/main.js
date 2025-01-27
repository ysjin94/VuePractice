
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
//import AppCard from '@/components/PostItem.vue'

//createApp(App).mount('#app')
const app = createApp(App);
//app.component('AppCard', AppCard);
//
app.provide('app-message', 'THIS IS GLOBAL APP MESSAGE !');
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js'
