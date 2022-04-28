function findItem(data, id) {
    return data.items.find(item => item.id === id);
};

module.exports = {
    addItem(data, changeableItem) {
        data.items.push(changeableItem);
        data.totalPrice += (+changeableItem.price);
        data.totalCounts += changeableItem.amount;
    },

    changeItem(data, changeableItem) {
        const { id, value, price } = changeableItem;
        const find = findItem(data, id);

        if (value == -1 && find.amount == 1) {
            const index = data.items.indexOf(find);
            data.items.splice(index, 1);
            data.totalCounts += value;
            data.totalPrice += price;
        } else {
            find.amount += value;
            find.totalPrice += price;
            data.totalCounts += value;
            data.totalPrice += price;
        };
    },

    deleteItem(data, changeableItem, removeAll) {
        const find = findItem(data, changeableItem.id);

        if (!removeAll) {
            const index = data.items.indexOf(find);
            data.items.splice(index, 1);

            data.totalPrice = data.totalPrice - find.totalPrice;
            data.totalCounts = data.totalCounts - find.amount;
        } else {
            data.items = [];
            data.totalPrice = 0;
            data.totalCounts = 0;
        };
    }
}