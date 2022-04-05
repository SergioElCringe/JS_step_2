const fs = require('fs');

cart = {
    path: './src/db/cart.json',

    _findItem(valData, id) {
        return valData.items.find(cartItem => cartItem.id === id);
    },

    findOperator(valChangeableItem) {
        return valChangeableItem.operator;
    },

    async addItem(data, changeableItem) {
        data.items.push(changeableItem);
        data.totalPrice += (+changeableItem.price);
        data.totalCounts += changeableItem.amount;
        await fs.writeFileSync(this.path, JSON.stringify(data, null, ' '));
    },

    async changeItem(data, changeableItem) {
        const operator = this.findOperator(changeableItem);
        const find = this._findItem(data, changeableItem.id);

        if (operator === 'plus') {
            find.amount++;
            find.totalPrice += changeableItem.price;

            data.totalCounts++;
            data.totalPrice += (+changeableItem.price);

        } else {
            if (find.amount > 1) {
                find.amount--;
                find.totalPrice = find.totalPrice - changeableItem.price;

                data.totalCounts--;
                data.totalPrice = data.totalPrice - changeableItem.price;
            };
        };

        await fs.writeFileSync(this.path, JSON.stringify(data, null, ' '));
    },

    async deleteItem(data, changeableItem) {
        const operator = this.findOperator(changeableItem);
        const find = this._findItem(data, changeableItem.id);

        if (operator === 'deleteItem') {
            let index = data.items.indexOf(find);
            data.items.splice(index, 1);
            data.totalPrice = data.totalPrice - find.totalPrice;
            data.totalCounts = data.totalCounts - find.amount;
        } else {
            data.items = [];
            data.totalPrice = 0;
            data.totalCounts = 0;
        };

        await fs.writeFileSync(this.path, JSON.stringify(data, null, ' '));
    }
};

module.exports = cart;