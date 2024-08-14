import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
    state: () => ({
        orders: []
    }),
    actions: {
        addOrder(order) {
            this.orders.push(order);
        },
        clearOrders() {
            this.orders = [];
        }
    },
    getters: {
        allOrders: (state) => state.orders,
        orderCount: (state) => state.orders.length
    }
});
