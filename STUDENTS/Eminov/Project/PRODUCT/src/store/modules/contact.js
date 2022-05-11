import { contact } from '@api';

export default {
    namespaced: true,
    actions: {
        async sendMessage(val) {
            console.log(val)
            // try {
            //     await contact.sendMessage(val);
            // } catch (err) {
            //     throw err;
            // };
        },
    },
};