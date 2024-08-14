import { createStore } from 'vuex';

const cart = createStore({
    state: {
        cart: JSON.parse(localStorage.getItem('cart')) || []
    },
    mutations: {
        addToCart(state, product) {
            const item = state.cart.find(p => p.id === product.id && p.color === product.color && p.size === product.size);
            if (item) {
                item.quantity++;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        emptyCart(state) {
            state.cart = [];
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        updateCartItem(state, { productId, color, size, quantity }) {
            const item = state.cart.find(p => p.id === productId && p.color === color && p.size === size);
            if (item) {
                item.quantity = quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeCartItem(state, { productId, color, size }) {
            state.cart = state.cart.filter(p => !(p.id === productId && p.color === color && p.size === size));
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    },
    actions: {
        addToCart({ commit }, product) {
            commit('addToCart', product);
        },
        emptyCart({ commit }) {
            commit('emptyCart');
        },
        updateCartItem({ commit }, payload) {
            commit('updateCartItem', payload);
        },
        removeCartItem({ commit }, payload) {
            commit('removeCartItem', payload);
        }
    },
    getters: {
        cart: state => state.cart,
        cartItemCount: state => state.cart.length,
        getCartItem: (state) => ({ id, color, size }) => state.cart.find(p => p.id === id && p.color === color && p.size === size)
    }
});

export default cart;


