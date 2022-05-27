<template>
  <div class="cart__item">
			<img class="cart__item__img" :src="imgApi + item.imgUrl">
				<div class="cart__item__info">
					<span>{{item.name}}</span>
				<div class="price__block">
					<span>$ {{item.prise}}</span>
			<div class="cart__quantity">
				<button class="cart__delete cart__action-btn" @click="changeAmount(false)">
					-
				</button>
				<span>{{item.amount}}</span>
				<button class="cart__add cart__action-btn"  @click="changeAmount(true)">
					+
				</button>
			</div>
				</div>
			</div>
			<div>
			$ {{item.price * item.amount}}
			</div>
			<button class="cart__delete-all cart__action-btn" @click="this.$parent.deleteItemAll(item)">
			X
			</button>
    </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
    },
    imgApi: {
      type: String,
    }
  },
	methods:{
		changeAmount(add){
			//$emit - пользовательские события
			this.$emit('changeItem', {id: this.item.id, amount: add ? 1 : -1});
		},
	},
  computed: {
    imgUrl() {
      return this.imgApi + this.item.imgUrl;
    },
  }
}
</script>

<style>
.button_custom {
	display: flex;
	justify-content: center;
	align-items: center;
	color: black;
}
.cart__icon {
	width: 15px;
}
.cart__item {
	height: 70px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.cart__item__img {
	height: 60px;
}
button:active,
button:focus {
	outline: none !important;
}
.header_extra {
	display: flex !important;
	align-items: center !important;
}
.cart__action-btn {
	border: 1px solid black;
	border-radius: 5px;
	width: 20px;
	text-align: center;
	cursor: pointer;
}
.search_icon svg {
	width: 20px;
}
.cart__item___info {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
}
.price__block {
	display: flex;
	justify-content: space-around;
}
.price__block span {
	margin-right: 10px;
}
.cart__quantity {
	cursor: pointer;
}

</style>