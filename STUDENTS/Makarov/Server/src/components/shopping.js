module.exports = {
    removeItem(lists, id) {
        return new Promise((res, rej) => {
            lists.cart.items = lists.cart.items.filter(el => el.id !== id);
            res(JSON.stringify(lists));
        })
    },
    changeItemAmount(lists, id, value) {
        return new Promise((res, rej) => {
            const item = lists.cart.items.find(el => el.id === id);
            if (item) {
                item.amount += value;
                res(JSON.stringify(lists));
            }
        });
    },
    addNewItem(lists, id) {
        return new Promise((res, rej) => {
            const item = lists.catalog.items.find(el => el.id === id);
            if (item) {
                item.amount = 1;
                if(!lists.cart.items.find(el => el.id === id)) {
                    lists.cart.items.push(item);
                    res(JSON.stringify(lists));
                } else {
                    lists.cart.items.find(el => el.id === id).amount++;
                    res(JSON.stringify(lists));
                }
            }
        });
    }
};