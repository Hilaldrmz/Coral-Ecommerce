<template>
    <div class="is-that-empty" v-if="orders.length === 0">
        <p>No orders yet.</p>
    </div>

    <section class="orders" v-else>
        <div class="order-row" v-for="order in orders" :key="order.orderNumber">
            <div class="order-details">
                <div class="order-date">
                    Order Date: <span>{{ order.orderDate }}</span>
                </div>
                <div class="order-number">
                    Order Number: <span>{{ order.orderNumber }}</span>
                </div>
                <div class="order-total">
                    Order Total: <span class="colored">$ {{ order.totalPrice }}</span>
                </div>
            </div>
            <div class="order-item" v-for="cartItem in order.cartItems" :key="cartItem.id">
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
                            <div class="item-size">Size: {{ cartItem.size }}</div>
                            <div class="item-color">Color:
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
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();
const orders = computed(() => cartStore.orders);
</script>


<style lang="scss" scoped>
.is-that-empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100dvw;
    @include baseMargin;
    @include mainContainerHeight;

    p {
        font-size: 1cqi;
        font-style: italic;
    }
}

.orders {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include baseMargin;
    @include mainContainerHeight;

    .order-row {
        @include baseWidth;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 20px;


        .order-details {
            display: flex;
            // flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            text-align: left;
            margin-bottom: 10px;
            padding: 10px;
            background-color: $white-soft;
            border: 1px solid $gray-divider-light;
            border-radius: 20px;

            .order-number,
            .order-date,
            .order-total {
                font-size: 1.1em;
                font-weight: bold;

                .colored {
                    color: $primary;
                    font-size: 1.1em;
                }

            }
        }

        .order-item {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 50px;
            padding: 10px;
            border: 1px solid $gray-divider-light;
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
</style>
