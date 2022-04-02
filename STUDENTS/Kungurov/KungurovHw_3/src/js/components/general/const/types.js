export const PRODUCTS_API = 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products';
export default {
  catalog: {
    get(item) {
      const { imgUrl, name, price, category, id } = item;
      return `
      <div class="product">
      <div class="product_image">"<img src="${ PRODUCTS_API + imgUrl }" alt=""></div>
      <div class="product_content">
        <div class="product_title"><a href="product.html">${ name }</a></div>
        <div class="product_price">$${ price }</div>
      </div>
      <div 
        class="button button_custom btn-add"
        id = "btn"
        data-imgurl="${ imgUrl }"
        data-name="${ name }"
        data-price="${ price }"
        data-id="${ id }"
      >
      </div>
    </div>
    `;},
    _getCategory(categoryId) {
      let className, text;
  
      switch (categoryId) {
        case 1: {
          className = 'product_new';
          text = 'New';
          break;
        }
  
        case 2: {
          className = 'product_hot';
          text = 'Hot';
          break;
        }
  
        default: {
          className = 'product_sale';
          text = 'Sale';
        }
      };
      return { className, text };
    },
  },
  cart: {
    get(item) {
      const { imgUrl, name, price, amount, id } = item;
      
      return `
      <div class="cart__item" id="cart__item" >
          <img class="cart__item__img" src="${PRODUCTS_API + imgUrl}">
          <div class="cart__item__info">
            <span>${name}</span>
            <div class="price__block">
              <span>$${price}</span>
              <span>количество: ${amount}</span>
            </div>
          </div>
          <button class= "delete" id = " ${ id }">x</button>
      </div>
      `;
    }
  }
};
