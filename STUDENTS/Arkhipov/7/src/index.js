import './styles/main_styles.css'
import './styles/my_style.css'

import app from './js/app'
import RequestManager from './js/components/api';
const request = new RequestManager();

app(request);
