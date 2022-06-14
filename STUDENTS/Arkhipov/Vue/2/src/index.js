import './styles/main_styles.css';
import './styles/f-a/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import app from './js/app'
import RequestManager from './js/components/api';
const request = new RequestManager();

Vue.prototype.$api = request;
const project = new Vue(app);
