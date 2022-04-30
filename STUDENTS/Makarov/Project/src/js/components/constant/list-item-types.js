const imgURLTemplate = 'https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/';

export default {
    catalog: {
        getItemTemplate(item, stickerTypes) {
            const { imgFileName, sticker, link, title, price, id } = item;
            const stickerEl = sticker ? `<div class="product_extra product_${stickerTypes[sticker]}"><a href="${link}">${stickerTypes[sticker].charAt(0).toUpperCase() + stickerTypes[sticker].slice(1)}</a></div>` : '';
            return `
                <div class="product">
                    <div class="product_image">
                        <img src="${imgURLTemplate + imgFileName}">
                    </div>
                    ${stickerEl}
                    <div class="product_content">
                        <div class="product_title"><a href="${link}">${title}</a></div>
                        <div class="product_price">$${price}</div>
                    </div>
                    <button 
                        class='button_add'
                        data-imgfilename="${imgFileName}"
                        data-title="${title}"
                        data-price="${price}"
                        data-id="${id}"
                    >
                        Add
                    </button>
                </div>
    
            `;
        },
    },
    cart: {
        getItemTemplate(item) {
            const { imgFileName, title, price, id, amount } = item;
            return `
                <div class="cart-item" data-id="${id}">
                    <img class="cart-item__img" src="${imgURLTemplate + imgFileName}">
                    <div class="cart-item__info">
                        <span class="cart-item__title">${title}</span>
                        <div class="cart-item__order">
                        <span class="cart-item__price">${price}</span>
                        <span class="cart-item__amount">
                            <b class="cart-item__btn cart-item__btn_minus">-</b>${amount}<b class="cart-item__btn cart-item__btn_plus">+</b>
                        </span>
                        </div>
                    </div>
                    <button class="cart__delete-btn">
                    ×
                    </button>
                </div>
            `;
        },
    }
}