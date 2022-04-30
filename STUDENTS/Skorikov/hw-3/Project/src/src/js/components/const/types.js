export const PRODUCTS_API = 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products';
export const menuApi = 'https://raw.githack.com/SergioElCringe/JS_step_1/main/BASE__PROJECT/';

export default {
    catalog: {
        getTemplate(item) {
            const { imgUrl, name, price, category, id } = item;

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
                    <div class="product_title"><a href="product.html">${name}</a></div>
                    <div class="product_price">$${price}</div>
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
        },

        getCategory(categoryId) {
            const category = categoryId ? this.checkCategory(categoryId) : null;

            return category ? `
            <div class="product_extra ${category.className}">
                <a href="categories.html">${category.text}</a>
            </div>` : '';
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
                <a href="${menuApi + url}">${name}</a>
                ${this.checkSubCategories(subCategories)}
            </li>`;
        },

        getTemplateSub(item) {
            const { url, name } = item;
            return `<li><a href="${menuApi + url}">${name}</a></li>`;
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
        },
    }
};