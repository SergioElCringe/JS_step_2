import Categories from "./Categories";
const url = '/api/description';
const carouselUrl = 'https://raw.githack.com/SergioElCringe/JS_step_1/main/BASE__PROJECT/images';

export default class Description extends Categories {
    constructor(cart, api, type = 'description') {
        super(cart, api, type);
        this.localProduct = null;
        this.qty = 1;
    }

    async _init() {
        this._initContainers();

        if (this.container) {
            const { name, id, price, amount, imgUrl, totalPrice } = JSON.parse(localStorage.product);

            try {
                const data = await this.request.send(url, 'GET');

                if (!data.error) {
                    const find = data.find(item => item.id == id);

                    if (find) {
                        this.items.push({ imgUrl, id, name, price, totalPrice, amount, images: find.images });
                    };
                };
            } catch (err) {
                console.warn(err);
            } finally {
                if (this.items.length > 0) {
                    this._render();
                };
            };
        };
    }

    _initContainers() {
        this.container = document.querySelector('#des-prod');

        if (this.container) {
            this.container.addEventListener('click', this._handleEvents.bind(this));
        };
    }

    _methodsAction(action, product, carouselImg) {
        switch (action) {
            case 'btn-add': {
                this.cart.addItem(product);
                break;
            };
            case 'quantity_inc_button': {
                document.querySelector('#quantity_input').value = ++this.qty;
                product.totalPrice += product.price;
                product.amount = this.qty;
                break;
            };
            case 'quantity_dec_button': {
                if (this.qty > 1) {
                    document.querySelector('#quantity_input').value = --this.qty;
                    product.totalPrice = product.totalPrice - product.price;
                    product.amount = this.qty;
                };
                break;
            };
            case 'carousel-image': {
                this._carousel(carouselImg);
            };
        };
    }

    _handleEvents(evt) {
        const action = evt.target.id;
        const product = this.items[0];
        const { img } = evt.target.dataset;

        this._methodsAction(action, product, img);
    }

    _carousel(carouselImg) {
        document.querySelector('.details_image_large').innerHTML = `<img src="${carouselUrl + carouselImg}">`;
    }
}