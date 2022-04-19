import "./styles/cart.css";
import "./styles/catalog.css";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';

import app from './js/components/app.js';
import RequestManager from './js/components/api/request-manager.js';
import vueSettings from "./js/components/vueApp";

const requestManager = new RequestManager();
app(requestManager);
const vueApp = new Vue(vueSettings);

