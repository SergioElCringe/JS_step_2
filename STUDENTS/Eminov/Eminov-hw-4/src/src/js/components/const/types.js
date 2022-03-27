export const PRODUCTS_API = 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products';
export const menuApi = 'https://raw.githack.com/SergioElCringe/JS_step_1/main/BASE__PROJECT';

export default {
    catalog: {
        getTemplate(item) {
            const { imgUrl, name, price, prevPrice, category, id } = item;

            return `<div class="product">
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
                ${this.getCategory(category)}
                <div class="product_content">
                    <div class="product_title dev-prod"><a href="product.html">${name}</a></div>
                    ${this.getPrice(category, prevPrice, price)}
                </div>
            </div>`;
        },

        checkCategory(categoryId) {
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
                        className = 'product_sale';
                        text = 'Sale';
                        break;
                    };

                default:
                    {
                        className = 'product_hot';
                        text = 'Hot';
                    };
            };

            return { className, text };
        },

        getCategory(categoryId) {
            const category = categoryId ? this.checkCategory(categoryId) : null;

            return category ? `
            <div class="product_extra ${category.className}">
                <a href="categories.html">${category.text}</a>
            </div>` : '';
        },

        getPrice(categoryid, prevPrice, price) {
            return categoryid === 2 ? `<div class="product_price sale">
                <s><span class="old-price">$${prevPrice}</span></s>
                <span class="new-price">$${price}</span>
            </div>` : `<div class="product_price">$${price}</div>`;
        }
    },

    categories: {
        getTemplate(item) {
            const { imgUrl, name, price, prevPrice, category, id } = item;

            return `<div class="product"
                    data-imgurl="${imgUrl}"
                    data-name="${name}"
                    data-price="${price}"
                    data-id="${id}">
                <div class="product_image">
                    <img src="${PRODUCTS_API + imgUrl}" alt="">
                    <div class="btn-add">Add this product</div>
                </div>
                ${this.getCategory(category)}
                <div class="product_content">
                    <div class="product_title" dev-prod><a href="product.html">${name}</a></div>
                    ${this.getPrice(category, prevPrice, price)}
                </div>
            </div>`;
        },

        checkCategory(categoryId) {
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
                        className = 'product_sale';
                        text = 'Sale';
                        break;
                    };

                default:
                    {
                        className = 'product_hot';
                        text = 'Hot';
                    };
            };

            return { className, text };
        },

        getCategory(categoryId) {
            const category = categoryId ? this.checkCategory(categoryId) : null;

            return category ? `
            <div class="product_extra ${category.className}">
                <a href="categories.html">${category.text}</a>
            </div>` : '';
        },

        getPrice(categoryid, prevPrice, price) {
            return categoryid === 2 ? `<div class="product_price sale">
                <s><span class="old-price">$${prevPrice}</span></s>
                <span class="new-price">$${price}</span>
            </div>` : `<div class="product_price">$${price}</div>`;
        }
    },

    menu: {
        getTemplate(item) {
            const { url, name, subCategories } = item;
            let hassubs = '';

            if (subCategories) {
                hassubs = 'class="hassubs"';
            };

            return `
            <li ${hassubs}>
                <a href="${url}">${name}</a>
                ${this.checkSubCategories(subCategories)}
            </li>`;
        },

        getTemplateSub(item) {
            const { url, name } = item;
            return `<li><a href="${url}">${name}</a></li>`;
        },

        checkSubCategories(categories) {
            const sub = categories ? categories : null;
            let subAccum = '';

            if (sub) {
                sub.forEach(itemSub => subAccum += this.getTemplateSub(itemSub));
            };

            return sub ? `<ul>${subAccum}</ul>` : '';
        }
    },

    cart: {
        getTemplate(item) {
            const { imgUrl, name, price, amount, id } = item;

            return `<hr>
            <div class="cart__item">
                <img class="cart__item__img" src="${PRODUCTS_API + imgUrl}">
                <div class="cart__item__info">
                    <span>Name: <b>${name}</b></span>
                    <div class="price__block">
                        <span data-price="${price}">Cost: <b>$${price}</b></span>
                        <div class="quantity" data-id="${id}"><span class="left">-</span><span class="amount">${amount}</span><span class="right">+</span></div>
                    </div>
                    <div data-id="${id}"><span class="item-delete">Remove this product</span></div>
                </div>
            </div>`;
        }
    },

    description: {
        getTemplate(item) {
            const { name, price, imgUrl, category, amount } = item;

            return `
            <div class="col-lg-6
                <div class="details_image">
                    <div class="details_image_large">
                        <img src="${PRODUCTS_API + imgUrl}">
                        ${this.getCategory(category)}
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="details_content">
                    <div class="details_name">${name}</div>
                    <div class="details_price">$${price}</div>
                    <div class="in_stock_container">
                        <div class="availability">Availability:</div>
                        <span>In Stock</span>
                    </div> 
                    <div class="details_text">
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea
                            dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris
                            consequat nisi ut mauris efficitur lacinia.
                        </p>
                    </div>
                    <div class="product_quantity_container">
                        <div class="product_quantity clearfix">
                            <span>Qty</span>
                            <input id="quantity_input" type="text" pattern="[0-9]*" value="1">
                            <div class="quantity_buttons">
                                <div id="quantity_inc_button" class="quantity_inc quantity_control"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>
                                <div id="quantity_dec_button" class="quantity_dec quantity_control"><i class="fa fa-chevron-down" aria-hidden="true"></i></div>
                            </div>
                        </div>
                        <div class="button cart_button"><a href="#">Add to cart</a></div>
                    </div>
                    <div class="details_share">
                        <span>Share:</span>
                        <ul>
                            <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>`
        },

        checkCategory(categoryId) {
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
                        className = 'product_sale';
                        text = 'Sale';
                        break;
                    };

                default:
                    {
                        className = 'product_hot';
                        text = 'Hot';
                    };
            };

            return { className, text };
        },

        getCategory(categoryId) {
            const category = categoryId ? this.checkCategory(categoryId) : null;

            return category ? `
            <div class="product_extra ${category.className}">
                <a href="categories.html">${category.text}</a>
            </div>` : '';
        },
    }
};