import './style.css';

export default {
	name: 'cartItem',
	props: ['item', 'imgApi',],

	data() {
		return {
			url: '/api/cart',
		}
	},

	template: `
		<div class="cart__item"">
			<img class="cart__item__img" :src="imgApi + item.imgUrl">
				<div class="cart__item__info">
					<span>{{item.name}}</span>
				<div class="price__block">
					<span>$ {{item.prise}}</span>
			<div class="cart__quantity">
				<button class="cart__delete cart__action-btn" :data-id="item.id">
					-
				</button>
				<span>{{item.amount}}</span>
				<button class="cart__add cart__action-btn" :data-id="item.id">
					+
				</button>
			</div>
				</div>
			</div>
			<div>
			$ {{item.price * item.amount}}
			</div>
			<button class="cart__delete-all cart__action-btn" :data-id="item.id">
			X
			</button>
    </div>
	`
}