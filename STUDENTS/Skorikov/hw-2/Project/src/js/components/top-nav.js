import { menuApi } from "./app";

const menu = [{
        url: 'index.html',
        name: 'Home',
        subCategories: [{
                url: 'categories.html',
                name: 'Categories'
            },
            {
                url: 'product.html',
                name: 'Product'
            },
            {
                url: 'cart.html',
                name: 'Cart'
            },
            {
                url: 'checkout.html',
                name: 'Check out'
            },
            {
                url: 'contact.html',
                name: 'Contact'
            },
        ]
    },
    {
        url: 'categories.html',
        name: 'Categories',
        subCategories: [{
                url: 'categories.html',
                name: 'Category'
            },
            {
                url: 'categories.html',
                name: 'Category'
            },
            {
                url: 'categories.html',
                name: 'Category'
            },
            {
                url: 'categories.html',
                name: 'Category'
            },
            {
                url: 'categories.html',
                name: 'Category'
            },
        ]
    },
    {
        url: '#',
        name: 'Accessories',
        subCategories: null
    },
    {
        url: '#',
        name: 'Offers',
        subCategories: null
    },
    {
        url: 'contact.html',
        name: 'Contact',
        subCategories: null
    }
];

export default class Navigation {
    constructor() {
        this.container = null;
        this.items = [];
        this._init();
    }
    
    _init() {
        this.container = document.querySelector('#main_nav');
        this.items = menu;
        this._render();
    }

    getTemplate(item) {
        const { url, name, subCategories } = item;
        let hassubs = '';

        if (subCategories) {
            hassubs = 'class="hassubs"';
        };

        return `
        <li ${hassubs}>
            <a href="${menuApi + url}">${name}</a>
            ${this.checkSubCategories(subCategories)}
        </li>`;
    }

    getTemplateSub(item) {
        const { url, name } = item;
        return `<li><a href="${menuApi + url}">${name}</a></li>`;
    }

    checkSubCategories(categories) {
        const sub = categories ? categories : null;
        let subAccum = '';

        if (sub) {
            sub.forEach(itemSub => subAccum += this.getTemplateSub(itemSub));
        };

        return sub ? `<ul>${subAccum}</ul>` : '';
    }

    _render() {
        let accum = '';
        this.items.forEach(item => accum += this.getTemplate(item));
        this.container.innerHTML = accum;
    }
};