import { contact } from '@api';

export default {
    namespaced: true,
    actions: {
        async sendMessage(val) {
            console.log(val)
        },
    },
};
