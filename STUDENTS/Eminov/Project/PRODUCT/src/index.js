import './src/styles/main_styles.css';
import app from './src/js/app';
import RequestManager from './src/js/components/api/index';

const request = new RequestManager();
app(request);