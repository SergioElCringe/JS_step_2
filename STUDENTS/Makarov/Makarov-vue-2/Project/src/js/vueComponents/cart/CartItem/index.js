export default {
    name: "CartIem",
    props: ["item", "imgURLTemplate"],
    template: `
        <div class="cart-item">
            <img class="cart-item__img" :src="imgURLTemplate + item.imgFileName">
            <div class="cart-item__info">
                <span class="cart-item__title">{{ item.title }}</span>
                <div class="cart-item__order">
                    <span class="cart-item__price">{{ item.price }}</span>
                    <span class="cart-item__amount">
                        <b class="cart-item__btn cart-item__btn_minus">-</b>
                        <span> {{ item.amount }} </span>
                        <b class="cart-item__btn cart-item__btn_plus">+</b>
                    </span>
                </div>
            </div>
            <button class="cart__delete-btn">
                ×
            </button>
        </div>
    `
}