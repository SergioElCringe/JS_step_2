function find(arr, id) {
	return arr.find(el => el.id === id);
};

module.exports = {
	add(cart, item) {
		cart.items.push(item);
		return cart;
	},
	change(cart, id, amount) {
		const el = find(cart.items, id);
		el.amount += amount;
		return cart;
	},
	remove(cart, id) {
		cart.items.filter(el => el.id !== id);
		return cart;
	}
};