function findItem(data, id) {
    return data.items.find(item => item.id == id);
};

function totalPrice(data) {
    return data.items.reduce((acc, item) => {
        return acc += (item.price * item.amount);
    }, 0);
};

function totalCounts(data) {
    return data.items.reduce((acc, item) => {
        return acc += item.amount;
    }, 0);
};

module.exports = {
    addItem(data, changeableItem) {
        data.items.push(changeableItem);
        data.totalPrice = totalPrice(data);
        data.totalCounts = totalCounts(data);
    },

    changeItem(data, changeableItem) {
        const { id, amount } = changeableItem;
        const find = findItem(data, id);

        if (amount == -1 && find.amount == 1) {
            const index = data.items.indexOf(find);
            data.items.splice(index, 1);
        } else {
            find.amount += amount;
        };

        data.totalPrice = totalPrice(data);
        data.totalCounts = totalCounts(data);
    },

    deleteItem(data, changeableItem) {
        const find = findItem(data, changeableItem);
        const index = data.items.indexOf(find);
        data.items.splice(index, 1);

        data.totalPrice = totalPrice(data);
        data.totalCounts = totalCounts(data);
    },

    clearCart(data) {
        data.items = [];
        data.totalPrice = totalPrice(data);
        data.totalCounts = totalCounts(data);
    },
};