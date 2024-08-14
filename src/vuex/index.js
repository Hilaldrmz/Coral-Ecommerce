import { createStore } from 'vuex';
import cart from './cart';
import orders from './order';

const store = createStore({
    modules: {
        cart,
        orders,
    }
});

export default store;