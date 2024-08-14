import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        orders: JSON.parse(localStorage.getItem('orders')) || []
    }),
    actions: {
        addToCart(product) {
            if (!this.cart) {
                this.cart = [];
            }
            const item = this.cart.find(p => p.id === product.id && p.color === product.color && p.size === product.size);
            if (item) {
                item.quantity++;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        emptyCart() {
            this.cart = [];
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        updateCartItem({ productId, color, size, quantity }) {
            const item = this.cart.find(p => p.id === productId && p.color === color && p.size === size);
            if (item) {
                item.quantity = quantity;
            }
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        removeCartItem({ productId, color, size }) {
            this.cart = this.cart.filter(p => !(p.id === productId && p.color === color && p.size === size));
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        placeOrder(order) {
            this.orders.push(order);
            localStorage.setItem('orders', JSON.stringify(this.orders));
            this.emptyCart();
        }
    },
    getters: {
        cartItems: (state) => state.cart,
        cartItemCount: (state) => state.cart.length,
        getCartItem: (state) => ({ id, color, size }) => state.cart.find(p => p.id === id && p.color === color && p.size === size),
        orderList: (state) => state.orders
    }
});
