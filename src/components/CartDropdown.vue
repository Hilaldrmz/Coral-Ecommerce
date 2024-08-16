<template>
    <div class="dropdown" v-if="activeDropdown === 'cart'" ref="cartDropdown">
        <div class="if-cart-empty" v-if="cartItems.length === 0">
            <h2>Your cart is empty</h2>
        </div>
        <div class="cart-row">
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
                            <div class="item-size">Size: {{ cartItem.size }}</div>
                            <div class="item-color">Color:
                                <button :style="{ backgroundColor: cartItem.color }" />
                            </div>
                        </div>
                    </div>

                </div>

                <div class="item-quantity">
                    <button class="quantity-btn" :disabled="cartItem.quantity == 1"
                        @click="updateQuantity(cartItem.id, cartItem.color, cartItem.size, cartItem.quantity - 1)">-</button>
                    <span class="quantity">{{ cartItem.quantity }}</span>
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
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useCartStore } from '../stores/cart';

function getImagePath(imagePath) {
    const baseURL = import.meta.env.BASE_URL;

    if (import.meta.env.PROD !== true) {
        return imagePath;
    } else {
        return baseURL + imagePath;
    }
}

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.cartItems);

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

const props = defineProps(['activeDropdown']);
const cartDropdown = ref(null);

onMounted(() => {
    if (cartDropdown.value) {
        emit('setRef', cartDropdown.value);
    }
});
</script>

<style lang="scss" scoped>
.dropdown {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 55px;
    background-color: $white;
    border: $gray-divider-light 1px solid;
    border-radius: 0.25rem;
    min-height: 80px;
    min-width: min-content;
    z-index: 10000;
    overflow: hidden;
    transition: all 0.3s ease;

    @media screen and (max-width: 1775px) {
        right: 10px;
    }

    .if-cart-empty {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        font-size: 0.5rem;
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
            gap: 20px;
            padding: 10px;
            border: $gray-divider-light 1px solid;
            min-width: 30dvw;
            min-width: 550px;
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
                        box-sizing: border-box;
                    }
                }

                .item-details {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: start;
                    gap: 5px;
                    box-sizing: border-box;

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

                        .item-size {
                            // white-space: nowrap;
                            word-break: keep-all;
                        }

                        .item-color {
                            display: flex;
                            gap: 10px;
                            flex-wrap: nowrap;
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
            }
        }

        .right-side-wrap {
            display: flex;
            flex-direction: column;
            align-items: end;
            justify-content: space-between;
            height: 100px;
            // margin: 0 0 0 20px;

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
                // white-space: nowrap;
                word-break: keep-all;
            }
        }
    }
}
</style>