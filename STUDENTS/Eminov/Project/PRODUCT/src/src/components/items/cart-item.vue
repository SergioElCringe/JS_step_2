<template>
  <div class="cart">
    <div class="cart__item">
        <img class="cart__item__img" :src="ImgUrl">
        <div class="cart__item__info">
            <span>Name: <b>{{ item.name }}</b></span>
            <div class="price__block">
                <span>Cost: <b>{{ item.price }}$</b></span>
                <div class="qty-flex">
                    <span>Qty:</span>
                    <div class="qty">
                        <button class="item-minus" @click="$parent.changeItem(item.id, -1, -item.price)">-</button>
                        <span class="amount">{{ item.amount }}</span>
                        <button class="item-plus" @click="$parent.changeItem(item.id, 1, item.price)">+</button>
                    </div>
                </div>
                <span>Total: <b>{{ item.totalPrice }}$</b></span>
            </div>
        </div>
    </div>
    <div>
        <span class="item-delete" @click="$parent.deleteItem(false, item.id)">X</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'catalog-item',
    props: {
        item: {
            type: Object
        },
        api: {
            type: Object
        }
    },

    computed: {
        ImgUrl() {
            return this.api.productApi + this.item.imgUrl;
        }
    }
};
</script>

<style>
    .cart {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 10px;
    }

    .cart__item {
        display: flex;
        padding: 5px 10px;
        align-items: center;
    }

    .cart__item__img {
        width: 140px;
        height: 80px;
        margin-right: 10px;
        border: 1px solid black;
    }

    .cart__item___info {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 10px;
    }

    .cart__item__info span {
        font-size: 13px;
    }

    .quantity {
        display: flex;
        background-color: rgba(255, 255, 255, 0.788);
        max-width: 80px;
        border-radius: 4px;
        justify-content: space-around;
        border: 2px solid black;
    }

    .quantity .amount {
        width: 28px;
        padding: 0 5px;
        border-right: 1px solid rgb(184, 183, 183);
        border-left: 1px solid rgb(184, 183, 183);
        display: flex;
        justify-content: center;
    }

    .quantity .item-minus {
        margin-left: 5px;
        cursor: pointer;
        padding-right: 5px;
    }

    .qty-flex {
        display: flex;
        align-items: center;
        width: 100px;
    }

    .quantity .item-plus {
        margin-right: 5px;
        cursor: pointer;
        padding-left: 5px;
    }

    .price__block span {
        display: block;
        font-size: 13px;
    }

    .qty {
        border: 2px solid black;
        display: flex;
        border-radius: 3px;
        margin-left: 10px;
    }

    .qty button {
        margin-left: 5px;
        margin-right: 5px;
        width: 10px;
    }

    .qty span {
        border-left: 1px solid lightgray;
        border-right: 1px solid lightgray;
        padding-left: 10px;
        padding-right: 10px;
        width: 30px;
        text-align: center;
    }
</style>