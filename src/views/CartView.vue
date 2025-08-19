<template>
    <section class="cart-section">

        <div class="steps-container">

            <ul class="checkout-steps">
                <li class="step" v-bind:class="{ 'active': activeTab === 'cart' }">
                    <div class="step-number">1</div>
                    <div class="step-label">{{ $t('cart') }}</div>
                </li>
                <li class="step" v-bind:class="{ 'active': activeTab === 'payment' }">
                    <div class="step-number">2</div>
                    <div class="step-label">{{ $t('shipping') }} & {{ $t('payment_method') }}</div>
                </li>
                <li class="step" v-bind:class="{ 'active': activeTab === 'result' }">
                    <div class="step-number">3</div>
                    <div class="step-label">{{ $t('orders') }} {{ $t('order_success') }}</div>
                </li>
            </ul>
        </div>
        <div class="step cart" v-if="activeTab === 'cart'">
            <div class="if-cart-empty" v-if="cartItems.length === 0">
                <h2>{{ $t('your_cart_is_empty') }}</h2>
                <RouterLink to="/products">
                    <button class="start-shopping">{{ $t('start_shopping') }}</button>
                </RouterLink>
            </div>
            <div class="cart-row" v-else>
                <div class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id">
                    <div class="left-side-wrap">
                        <RouterLink :to="`/product/${cartItem.id}`">
                            <div class="item-image">
                                <img :src="getImagePath(cartItem.image)" :alt="cartItem.name">
                            </div>
                        </RouterLink>
                        <div class="item-details">
                            <RouterLink :to="`/product/${cartItem.id}`">
                                <div class="item-name">{{ cartItem.name }}</div>
                            </RouterLink>
                            <div>
                                <div class="item-size">{{ $t('size') }} {{ cartItem.size }}</div>
                                <div class="item-color">{{ $t('color') }}
                                    <button :style="{ backgroundColor: cartItem.color }" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="item-quantity">
                        <button class="quantity-btn" :disabled="cartItem.quantity == 1"
                            @click="updateQuantity(cartItem.id, cartItem.color, cartItem.size, cartItem.quantity - 1)">-</button>
                        <span class="quantity">{{ $t('quantity') }} {{ cartItem.quantity }}</span>
                        <button class="quantity-btn"
                            @click="updateQuantity(cartItem.id, cartItem.color, cartItem.size, cartItem.quantity + 1)">+</button>
                    </div>

                    <div class="right-side-wrap">
                        <div class="item-remove" @click="removeItem(cartItem.id, cartItem.color, cartItem.size)">
                            <button class="remove-btn">
                                <font-awesome-icon icon="fa-regular fa-trash-can" />
                            </button>
                        </div>
                        <div class="item-price">$ {{ cartItem.price * cartItem.quantity }}</div>
                    </div>
                </div>
            </div>

            <div class="summary zig-zag-top">
                <div class="summary-head">
                    <button class="add-gift-card-btn">{{ $t('add_gift_card') }}</button>
                </div>
                <div class="summary-bottom">
                    <div class="summary-total">
                        <p class="total-label">{{ $t('total') }}</p>
                        <p class="total-price">${{ subtotal }}</p>
                    </div>
                    <input class="checkout-btn" @click="activeTab = 'payment'" :disabled="cartItems.length === 0"
                        :value="$t('checkout')" type="submit" />
                </div>
            </div>
        </div>

        <div class="step payment" v-if="activeTab === 'payment'">
            <div class="shipping-form">
                <div class="delivery-address">
                    <h3 class="delivery-address-label">{{ $t('delivery_address') }}</h3>
                    <input type="text" id="name" name="name" placeholder="name" />
                    <input type="text" id="surname" name="surname" placeholder="surname" />
                    <input type="text" id="phone" name="phone" placeholder="phone" />
                    <input type="text" id="email" name="email" placeholder="email" />
                    <input type="text" id="country" name="country" placeholder="country" />
                    <input type="text" id="city" name="city" placeholder="city" />
                    <input type="text" id="address" name="address" placeholder="address" />
                    <input type="text" id="zip" name="zip" placeholder="zip" />
                </div>
                <div class="delivery-options">
                    <h3 class="delivery-options-label">{{ $t('delivery_options') }}</h3>
                    <div class="delivery-option">
                        <label for="standard">
                            <input type="radio" id="standard" name="delivery" value="standard" />
                            {{ $t('standard_delivery') }}
                        </label>
                        <p class="shipping-day">{{ $t('estimated_delivery') }}</p>
                        <p class="shipping-price">{{ $t('free_of_charge') }}</p>
                    </div>
                    <div class="delivery-option">
                        <label for="express">
                            <input type="radio" id="express" name="delivery" value="express" />
                            {{ $t('express_delivery') }}</label>
                        <p class="shipping-day">{{ $t('same_day_delivery') }}</p>
                        <p class="shipping-price">$10.00</p> <!-- Fiyat sabit, isterseniz anahtar ekleyin -->
                    </div>
                </div>
                <div class="payment-method">
                    <h3 class="payment-method-label">{{ $t('payment_method') }}</h3>
                    <div class="payment-method-options">
                        <div class="payment-option">
                            <label for="credit-card">
                                <input type="radio" id="credit-card" name="payment" value="credit-card" />
                                {{ $t('credit_card') }}
                            </label>
                        </div>
                        <div class="payment-option">

                            <label for="paypal">
                                <input type="radio" id="paypal" name="payment" value="paypal" />
                                {{ $t('paypal') }}
                            </label>
                        </div>
                    </div>
                </div>
                <div class="terms-and-conditions">

                    <label for="terms">
                        <input type="checkbox" id="terms" name="terms" required />
                        {{ $t('terms_and_conditions') }}
                    </label>
                </div>
            </div>
            <div class="summary zig-zag-top">
                <div class="summary-head">
                    <div class="subtotal">
                        <p class="subtotal-label">{{ $t('subtotal') }}</p>
                        <p class="subtotal-price">${{ subtotal }}</p>
                    </div>
                    <div class="shipping">
                        <p class="shipping-label">{{ $t('shipping') }}</p>
                        <p class="shipping-price">${{ shipping }}</p>
                    </div>
                </div>
                <div class="summary-bottom">
                    <div class="summary-total">
                        <p class="total-label">Total</p>
                        <p class="total-price">${{ totalPrice }}</p>
                    </div>
                    <input class="checkout-btn" @click="checkout" :value="$t('checkout')" type="submit" />
                    <div class="secure-shop">
                        <font-awesome-icon icon="lock" />
                        <div class="wrap">
                            <h4>{{ $t('safe_shopping') }}</h4>
                            <p>{{ $t('ssl_protected') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="step result" v-if="activeTab === 'result'">
            <div class="order-complete">
                <div class="order-complete-message">
                    <font-awesome-icon icon="check-circle" class="check-circle" />
                    <span>{{ $t('order_success') }}</span>
                </div>
                <div class="order-details">
                    <div class="order-number">
                        <span>{{ $t('order_number') }}</span>
                        <span>{{ rondomOrderNum }}</span>
                    </div>
                    <div class="order-date">
                        <span>{{ $t('order_date') }}</span>
                        <span>{{ orderDate }}</span>
                    </div>
                    <div class="buttons">
                        <RouterLink to="/products">
                            <button class="button home">{{ $t('continue_shopping') }}</button>
                        </RouterLink>
                        <RouterLink to="/orders">
                            <button class="button orders">{{ $t('see_orders') }}</button>
                        </RouterLink>
                    </div>
                    <div class="order-row">
                        <div class="order-item" v-for="cartItem in latestOrder.cartItems" :key="cartItem.id">
                            <div class="left-side-wrap">
                                <RouterLink :to="`/product/${cartItem.id}`">
                                    <div class="item-image">
                                        <img :src="cartItem.image" :alt="cartItem.name">
                                    </div>
                                </RouterLink>
                                <div class="item-details">
                                    <RouterLink :to="`/product/${cartItem.id}`">
                                        <div class="item-name">{{ cartItem.name }}</div>
                                    </RouterLink>
                                    <div>
                                        <div class="item-size">{{ $t('size') }} {{ cartItem.size }}</div>
                                        <div class="item-color">{{ $t('color') }}
                                            <button :style="{ backgroundColor: cartItem.color }" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item-quantity">
                                <span class="quantity">{{ cartItem.quantity }}</span>
                            </div>
                            <div class="right-side-wrap">
                                <div class="item-price">$ {{ cartItem.price * cartItem.quantity }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { useCartStore } from '../stores/cart';

function getImagePath(imagePath) {
    const baseURL = import.meta.env.BASE_URL;

    if (import.meta.env.PROD !== true) {
        return imagePath;
    } else {
        return baseURL + imagePath;
    }
}

const activeTab = ref('cart');

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.cartItems);
const orders = computed(() => cartStore.orders);
const latestOrder = computed(() => orders.value[orders.value.length - 1]);

const emptyCart = () => {
    cartStore.emptyCart();
};
const rondomOrderNum = Math.floor(Math.random() * 1000000);

const orderDate = new Date().toLocaleDateString();

const updateQuantity = (productId, color, size, quantity) => {
    if (quantity <= 0) {
        cartStore.removeCartItem({ productId, color, size });
    } else {
        cartStore.updateCartItem({ productId, color, size, quantity });
    }
};

const removeItem = (productId, color, size) => {
    cartStore.removeCartItem({ productId, color, size });
};

const subtotal = computed(() => {
    return cartItems.value.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
});

const shipping = computed(() => {
    return 0;
});

const totalPrice = computed(() => {
    const productsTotal = cartItems.value.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
    return productsTotal + shipping.value;
});

const addToOrders = () => {
    const order = {
        cartItems: cartItems.value,
        totalPrice: totalPrice.value,
        orderNumber: rondomOrderNum,
        orderDate: orderDate
    };
    cartStore.placeOrder(order);
    activeTab.value = 'result';
    return order;
};

const checkout = () => {
    addToOrders();
    activeTab.value = 'result';
};


</script>

<style lang="scss" scoped>
.cart-section {
    @include baseMargin;
    @include mainContainerHeight;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
    width: 100%;

    .steps-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: fit-content;
        background-color: $white-muted;
        padding: 1rem 0;
        margin-bottom: 30px;

        .checkout-steps {
            @include baseWidth;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            list-style-type: none;
            padding: 0;
            overflow: hidden;

            .step {
                display: flex;
                flex-direction: row;
                align-items: center;
                float: left;
                border: none;
                outline: none;
                padding: 3px 16px;
                transition: 0.3s;
                font-size: 17px;
                gap: 10px;

                .step-number {
                    border: $gray-divider-dark 1px solid;
                    border-radius: 100%;
                    width: 25px;
                    height: 25px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                // .step-label {}

                &.active {
                    border-bottom: $gray-divider-dark 0.5px solid;

                    >* {
                        font-weight: bold;
                    }

                }
            }
        }
    }

    .step.cart {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: start;
        gap: 10px;

        .if-cart-empty {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
            width: 50dvw;

            .start-shopping {
                padding: 10px;
                border-radius: 20px;
                border: $gray-divider-dark 1px solid;
                cursor: pointer;
            }
        }

        .cart-row {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;

            .cart-item {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                gap: 50px;
                padding: 10px;
                border: $gray-divider-light 1px solid;
                width: 50dvw;
                border-radius: 0.25rem;

                .left-side-wrap {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;

                    .item-image {
                        cursor: pointer;

                        img {
                            height: 100px;
                        }
                    }

                    .item-details {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: start;
                        gap: 5px;

                        .item-name {
                            font-size: 1.1em;
                            font-weight: bold;
                            cursor: pointer;
                        }

                        div {
                            display: flex;
                            flex-direction: row;
                            justify-content: start;
                            align-items: center;
                            gap: 10px;

                            // .item-size {}

                            .item-color {
                                display: flex;
                                gap: 10px;
                                flex-wrap: wrap;
                                justify-content: center;
                                align-items: center;

                                button {
                                    height: 30px;
                                    width: 30px;
                                    border: none;
                                    border-radius: 100%;

                                    box-shadow: inset 0 0 0 3px white;
                                }
                            }
                        }
                    }
                }
            }

            .item-quantity {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 10px;

                button {
                    cursor: pointer;
                    border: $gray-divider-light 1px solid;
                    border-radius: 5px;
                    font-weight: bold;
                }

                .quantity {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    font-size: 1.2em;
                    font-weight: bold;
                    width: 30px;
                    height: 30px;

                }

                .quantity-btn {
                    cursor: pointer;

                    // &:hover {}

                    // &:active {}

                    // &:focus {}
                }
            }

            .right-side-wrap {
                display: flex;
                flex-direction: column;
                align-items: end;
                justify-content: space-between;
                height: 100px;
                margin: 0 0 0 20px;

                .item-remove {
                    padding: 0;

                    .remove-btn {
                        border: none;
                        cursor: pointer;
                        padding: 0;

                        &:hover {
                            color: darkred;
                        }
                    }
                }

                .item-price {
                    font-size: 1.2em;
                    font-weight: bold;
                }
            }
        }
    }

    .step.payment {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: start;
        gap: 10px;

        .shipping-form {

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            border: $gray-divider-light 1px solid;
            padding: 30px;
            background-color: $white-muted;
            width: 50dvw;
            border-radius: 0.25rem;

            >* {
                width: 100%;
                border-bottom: $gray-divider-dark 1px dashed;
                padding: 20px;
            }

            .delivery-address {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: start;
                gap: 10px;

                .delivery-address-label {
                    font-size: 1.2em;
                    font-weight: bold;
                }

                input {
                    width: 100%;
                    padding: 10px;
                    border: $gray-divider-dark 1px solid;
                    border-radius: 5px;
                }
            }

            .delivery-options {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: start;
                align-items: start;
                gap: 10px;

                .delivery-options-label {
                    width: 100%;
                    font-size: 1.2em;
                    font-weight: bold;
                }

                .delivery-option {
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    gap: 10px;

                    p {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: start;
                        gap: 5px;
                        font-style: italic;
                        padding-left: 20px;
                        color: $text-light-secondary;
                    }
                }

                .delivery-option+.delivery-option {
                    margin-left: 100px;
                }
            }

            .payment-method {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: start;
                gap: 10px;

                .payment-method-label {
                    font-size: 1.2em;
                    font-weight: bold;
                }

                .payment-method-options {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: start;
                    gap: 10px;

                    .payment-option {
                        display: flex;
                        flex-direction: row;
                        justify-content: start;
                        align-items: center;
                        gap: 10px;
                    }
                }
            }

            .terms-and-conditions {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 10px;
                border: none;

                label {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;

                    input {
                        margin-right: 10px;

                    }

                    a {
                        font-weight: bold;
                    }
                }
            }
        }
    }

    .step.result {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .order-complete {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
            padding: 10px;
            margin-top: 40px;

            .order-complete-message {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 10px;
                color: green;
                font-size: 2em;

                .check-circle {
                    color: green;
                    font-size: 2em;
                }
            }

            .order-details {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 10px;
                margin-top: 20px;

                .order-number {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;

                    span {
                        font-weight: bold;
                    }
                }

                .order-date {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;

                    span {
                        font-weight: bold;
                    }
                }

                .buttons {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;

                    button {
                        padding: 10px;
                        border-radius: 20px;
                        border: $gray-divider-dark 1px solid;
                        cursor: pointer;
                    }
                }

                .order-row {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    margin-top: 20px;

                    .order-item {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        gap: 50px;
                        padding: 10px;
                        border: $gray-divider-light 1px solid;
                        width: 50dvw;


                        .left-side-wrap {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            gap: 20px;

                            .item-image {
                                cursor: pointer;

                                img {
                                    height: 100px;
                                }
                            }

                            .item-details {
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: start;
                                gap: 5px;

                                .item-name {
                                    font-size: 1.1em;
                                    font-weight: bold;
                                    cursor: pointer;
                                }

                                div {
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: start;
                                    align-items: center;
                                    gap: 10px;

                                    // .item-size {}

                                    .item-color {
                                        display: flex;
                                        gap: 10px;
                                        flex-wrap: wrap;
                                        justify-content: center;
                                        align-items: center;

                                        button {
                                            height: 30px;
                                            width: 30px;
                                            border: none;
                                            border-radius: 100%;

                                            box-shadow: inset 0 0 0 3px white;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .item-quantity {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 10px;

                .quantity {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    font-size: 1.2em;
                    font-weight: bold;
                    width: 30px;
                    height: 30px;
                }
            }

            .right-side-wrap {
                display: flex;
                flex-direction: column;
                align-items: end;
                justify-content: center;
                height: 100px;
                margin: 0 0 0 20px;

                .item-price {
                    font-size: 1.2em;
                    font-weight: bold;
                }
            }

        }
    }

    .summary {
        background: $white-muted;
        // border: $gray-divider-light 1px solid;
        outline: 1px solid $gray-divider-light;
        outline-offset: -1px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
        padding: 10px;
        min-height: 35dvh;
        max-height: 70dvh;
        width: 30dvw;
        border-radius: 0 0 0.25rem 0.25rem;

        &.zig-zag-top {
            &:before {
                background:
                    linear-gradient(-45deg, $white-muted 16px, transparent 0),
                    linear-gradient(45deg, $white-muted 16px, rgba(60, 60, 60, 0.16) 17px, transparent 0);
                background-position: left top;
                background-repeat: repeat-x;
                background-size: 13px 24px;
                content: " ";
                display: block;
                height: 10px;
                width: 30dvw;
                position: relative;
                margin-left: -10px;
                bottom: 18px;
                left: 0;
                border-left: 1px $gray-divider-light solid;
                border-right: 1px $gray-divider-light solid;
            }
        }

        .summary-head {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            padding: 10px;
            margin-top: -70px;

            .add-gift-card-btn {
                text-align: center;
                padding: 10px;
                white-space: nowrap;
                cursor: pointer;
                border-radius: 20px;
                border: $gray-divider-dark 1px solid;
                width: 100%;
            }

            .subtotal {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                width: 90%;
                padding-top: 30px;
            }

            .shipping {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                width: 90%;
            }
        }

        .summary-bottom {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            border-top: $gray-divider-light 2px dashed;
            padding: 10px;

            .summary-total {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                width: 90%;

                .total-label {
                    font-size: 1.2em;
                    font-weight: bold;
                }

                .total-price {
                    font-size: 1.2em;
                    font-weight: bold;
                }
            }

            .checkout-btn {
                text-align: center;
                padding: 10px;
                white-space: nowrap;
                cursor: pointer;
                border-radius: 20px;
                border: $gray-divider-dark 1px solid;
                width: 100%;

                // &:hover {}

                // &:active {}

                // &:focus {}
            }

            .secure-shop {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 10px;

                // font-awesome-icon {}
            }
        }
    }
}
</style>