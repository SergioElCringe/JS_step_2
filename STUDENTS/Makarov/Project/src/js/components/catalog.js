import List from './list.js';
export default class Catalog extends List {
    constructor(url, imgURLTemplate, type) {
        super(url, imgURLTemplate, type);
        this.stickerTypes = {};
    }


    _handleEvents() {
        this.container.addEventListener('click', e => {
            if(e.target.classList.contains('button_add')){
                const { title, price, imgfilename, id } = e.target.dataset;
                console.log({title, price, id, imgFileName: imgfilename});
            }
        });
    }

    _render() {
        this.container.innerHTML = this.items.reduce((accum, current) => accum += this._createProductBlock(current), '');
    }

    _createProductBlock(item) {
        const { imgFileName, sticker, link, title, price, id } = item;
        const stickerEl = sticker ? `<div class="product_extra product_${this.stickerTypes[sticker]}"><a href="${link}">${this.stickerTypes[sticker].charAt(0).toUpperCase() + this.stickerTypes[sticker].slice(1)}</a></div>` : '';
        return `
            <div class="product">
                <div class="product_image">
                    <img src="${this.imgURLTemplate + imgFileName}">
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
    }

    _initContainer() {
        this.container = document.querySelector('#catalog');
    }
}





// class Catalog {
//     constructor() {
//         this.container = null;
//         this.items = [];
//         this.imgLinkTemplate = null;
//         this.stickerTypes = {};
//         this.cart = null;
    
//     }

//     init() {
//         this.cart = cart;
//         this.container = document.querySelector('#catalog');
//         this.imgURLTemplate = IMG_URL_TEMPLATE;
//         this.stickerTypes = STICKER_TYPES;
//         this.items = CATALOG_DATA;
//         this.render();
//         this.handleEvents();
//     }

//     handleEvents() {
//         this.container.addEventListener('click', e => {
//             if(e.target.classList.contains('button_add')){
//                 const { title, price, imgfilename, id } = e.target.dataset;
//                 this.cart.addItem({title, price, id, imgFileName: imgfilename});
//             }
//         });
//     }

//     render() {
//         this.container.innerHTML = this.items.reduce((accum, current) => accum += this.createProductBlock(current), '');
//     }

//     createProductBlock(item) {
//         const { imgFileName, sticker, link, title, price, id } = item;
//         const stickerEl = sticker ? `<div class="product_extra product_${this.stickerTypes[sticker]}"><a href="${link}">${this.stickerTypes[sticker].charAt(0).toUpperCase() + this.stickerTypes[sticker].slice(1)}</a></div>` : '';
//         return `
//             <div class="product">
//                 <div class="product_image">
//                     <img src="${this.imgURLTemplate + imgFileName}">
//                 </div>
//                 ${stickerEl}
//                 <div class="product_content">
//                     <div class="product_title"><a href="${link}">${title}</a></div>
//                     <div class="product_price">$${price}</div>
//                 </div>
//                 <button 
//                     class='button_add'
//                     data-imgfilename="${imgFileName}"
//                     data-title="${title}"
//                     data-price="${price}"
//                     data-id="${id}"
//                 >
//                     Add
//                 </button>
//             </div>

//         `;
//     }
// };
