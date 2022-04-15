import './style.css';

export default {
    props: ['item', 'api', 'actions'],

    data() {
        return {
            categories: {
                '1': 'New',
                '2': 'Sale',
                '3': 'Hot'
            }
        };
    },

    computed: {
        category() {
            const { category } = this.item;
            return category ? {
                class: `product_${this.categories[category].toLowerCase()}`,
                text: this.categories[category]
            } : null;
        },
    },

    template: `
        <div>
            <div class="product" v-if="actions.type === 'catalog' && item.category">
                <div class="product_image">
                    <img :src="api.productApi + item.imgUrl">
                    <div class="btn-add">Add this product</div>
                </div>
                <div class="product_extra" :class="category.class" v-if="item.category">
                    <a href="categories.html">{{ category.text }}</a>
                </div>
                <div class="product_content">
                    <div class="product_title">
                        <a href="product.html" class="desprod">{{ item.name }}</a>
                        <div class="product_price sale" v-if="item.category === 2">
                            <s><span class="old-price">{{ item.prevPrice }}$</span></s>
                            <span class="new-price">{{ item.price }}$</span>
                        </div>
                        <div v-else class="product_price">{{ item.price }}$</div>
                    </div>
                </div>
            </div>
            <div class="cart" v-else-if="actions.type === 'cart'">
                <div class="cart__item">
                    <img class="cart__item__img" :src="api.productApi + item.imgUrl">
                    <div class="cart__item__info">
                        <span>Name: <b>{{ item.name }}</b></span>
                        <div class="price__block">
                            <span>Cost: <b>{{ item.price }}$</b></span>
                            <div class="qty-flex">
                                <span>Qty:</span>
                                <div class="qty">
                                    <button class="item-minus" @click="actions.changeItem(item, -1, -item.price)">-</button>
                                    <span class="amount">{{ item.amount }}</span>
                                    <button class="item-plus" @click="actions.changeItem(item, 1, item.price)">+</button>
                                </div>
                            </div>
                            <span>Total: <b>{{ item.totalPrice }}$</b></span>
                        </div>
                    </div>
                </div>
                <div>
                    <span class="item-delete" @click="actions.deleteItem(false, item.id)">&#128465</span>
                </div>
            </div>
            <li v-else-if="actions.type === 'menunavigation'" :class="{ hassubs: item.subCategories }">
                <a :href="item.url">{{ item.name }}</a>
                <ul v-if="item.subCategories">
                    <li v-for="item of item.subCategories">
                        <a :href="item.url">{{ item.name }}</a>
                    </li>       
                </ul>
            </li>
        </div>
    `
};