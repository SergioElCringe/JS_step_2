import './styles/cart_responsive.css'
import './styles/cart.css'
import './styles/categories_responsive.css'
import './styles/categories.css'
import './styles/checkout_responsive.css'
import './styles/checkout.css'
import './styles/contact_responsive.css'
import './styles/contact.css'
import './styles/main_styles.css'
import './styles/product_responsive.css'
import './styles/product.css'
import './styles/responsive.css'
import './styles/f-a/css/font-awesome.min.css'

// import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
// import bootstrap from 'bootstrap'

import app from './js/app'
import RequestManager from './js/components/api';
const request = new RequestManager();

app(request);
