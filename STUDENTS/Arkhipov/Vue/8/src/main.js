import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './styles/main_styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

loadFonts()
import RequestManager from './plugins/api';
window.$api = new RequestManager();

createApp(App)
	.use(router)
	.use(store)
	.use(vuetify)
	.mount('#app')
