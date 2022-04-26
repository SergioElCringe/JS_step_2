import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import RequestManager from './plugins/api/RequestManager.js'

window.$api = new RequestManager();
createApp(App).use(store).use(router).mount('#app')
