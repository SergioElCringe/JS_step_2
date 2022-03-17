import { PRODUCTS_API } from "./app";

const PRODUCTS = [{
    imgUrl: '/product_1.jpg',
    name: 'Smart Phone',
    price: 670,
    category: 1,
    id: 'p1'
},
{
    imgUrl: '/product_2.jpg',
    name: 'Smart Phone',
    price: 67,
    category: null,
    id: 'p2'
},
{
    imgUrl: '/product_3.jpg',
    name: 'Smart Phone',
    price: 70,
    category: null,
    id: 'p3'
},
{
    imgUrl: '/product_4.jpg',
    name: 'Smart Phone',
    price: 6700,
    category: 1,
    id: 'p4'
},
{
    imgUrl: '/product_5.jpg',
    name: 'Smart Phone',
    price: 10,
    category: 2,
    id: 'p5'
},
{
    imgUrl: '/product_6.jpg',
    name: 'Smart Phone',
    price: 220,
    category: null,
    id: 'p6'
},
{
    imgUrl: '/product_7.jpg',
    name: 'Smart Phone',
    price: 510,
    category: null,
    id: 'p7'
},
{
    imgUrl: '/product_8.jpg',
    name: 'Smart Phone',
    price: 60,
    category: 3,
    id: 'p8'
},
];

export default class Catalog {
    constructor() {
        this.items = [];
        this.container = null;
        this.cart = '';
        this._init();
    }

    _init() {
        this.items = PRODUCTS;
        this.container = document.querySelector('#catalog');
        this._render();
    }

    createTemplate(item) {
        const { imgUrl, name, price, category, id } = item;
        return `
        <div class="product">
            <div class="product_image">
                <img src="${PRODUCTS_API + imgUrl}" alt="">
                <div 
                    class="btn-add"
                    data-imgurl="${imgUrl}"
                    data-name="${name}"
                    data-price="${price}"
                    data-id="${id}"
                >Add this product</div>
            </div>
            ${this.getProductExtraTemplate(category)}
            <div class="product_content">
                <div class="product_title"><a href="product.html">${name}</a></div>
                <div class="product_price">$${price}</div>
            </div>
        </div>`;
    }

    getProductExtraTemplate(categoryId) {
        const category = categoryId ? this.getCategory(categoryId) : null;
        return category ? `
        <div class="product_extra ${category.className}">
            <a href="categories.html">${category.text}</a>
        </div>` : '';
    }

    getCategory(categoryId) {
        let className, text;

        switch (categoryId) {
            case 1:
                {
                    className = 'product_new';
                    text = 'New';
                    break;
                };

            case 2:
                {
                    className = 'product_hot';
                    text = 'Hot';
                    break;
                };

            default:
                {
                    className = 'product_sale';
                    text = 'Sale';
                };
        };

        return { className, text };
    }

    _render() {
        let result = '';

        this.items.forEach(item => {
            result += this.createTemplate(item);
        });

        this.container.innerHTML = result;
    }
};