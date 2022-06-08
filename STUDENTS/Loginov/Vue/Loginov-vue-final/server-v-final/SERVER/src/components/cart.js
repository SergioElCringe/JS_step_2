function find(arr, id) {
  return arr.find(el => el.id === id);
};
function findItem(cart, id) {
  return cart.items.find(item => item.id == id);
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
  },
  addItem(data, item) {
    data.items.push(item);
  },
  deleteItem(data, id) {
    const find = findItem(data, id);
    const index = data.items.indexOf(find);
    data.items.splice(index, 1);
  },
  changeItem(data, pl) {
    const { id, amount } = pl;
    const find = findItem(data, id);
    if (amount == -1 && find.amount == 1) {
      const index = data.items.indexOf(find);
      data.items.splice(index, 1);
    } else {
      find.amount += amount;
    };
  },

};