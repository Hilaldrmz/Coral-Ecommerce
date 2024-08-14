import { createStore } from 'vuex';

const orders = createStore ({
    state: {
        orders: JSON.parse(localStorage.getItem('orders')) || []
    },
    mutations: {
        addToOrders(state, order) {
            state.orders.push(order);
            localStorage.setItem('orders', JSON.stringify(state.orders));
        }
    },
    actions: {
        addToOrders({ commit }, order) {
            commit('addToOrders', order);
        }
    },
    getters: {
        orders: state => state.orders
    }
})

export default orders;