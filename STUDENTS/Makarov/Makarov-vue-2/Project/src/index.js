import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';

import app from './js/components/app.js';
import RequestManager from './js/components/api/request-manager.js';
import vueSettings from "./js/components/vueApp";

const requestManager = new RequestManager();
app(requestManager);

Vue.prototype.$api = requestManager;
const vueApp = new Vue(vueSettings);

