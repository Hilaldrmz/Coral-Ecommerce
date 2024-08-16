<template>
    <section class="products-section">
        <div class="text">
            <span>Or Subscribe To The Newsletter</span>
        </div>
        <div class="products">

            <div class="navigation">
                <ul>
                    <li class="bold">
                        <RouterLink to="/products">All Products</RouterLink>
                    </li>
                    <li><a href="">T-Shirt</a></li>
                    <li><a href="">Hoodies</a></li>
                    <li><a href="">Jacket</a></li>
                </ul>

                <button class="filter">
                    <font-awesome-icon icon="filter" />
                    Filter
                </button>
            </div>

            <div class="product" v-for="product in products" :key="product.id" @click="navigateToProduct(product.id)">
                <div class="badge-wrapper">
                    <span class="badge" :class="product.badge">{{ product.badge }}</span>
                </div>
                <img :src="getImagePath(product.image)" alt="product.name" />
                <div class="product-description">
                    <h3>{{ product.name }}</h3>
                    <div class="price-wrap">
                        <p class="price orj-price" :class="{ 'discount-applied': product.discount > 0 }"> ${{
                product.price
            }}</p>
                        <p class="price discounted-price" v-if="product.price !== discountedPrice(product)">${{
                discountedPrice(product) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

import data from "../data/data.json";
import { useRouter } from "vue-router";

const products = ref(data.products);


const baseUrl = import.meta.env.BASE_URL;

function getImagePath(ImagePath){
    return baseURL + ImagePath;
}

const discountedPrice = (product) => {
    if (product.discount > 0) {
        const discountAmount = product.price * (product.discount / 100);
        return product.price - discountAmount;
    }
    return product.price;
};

const router = useRouter();

const navigateToProduct = (productId) => {
    router.push({ name: 'ProductView', params: { id: productId } });
};


</script>

<style lang="scss" scoped>
.products-section {
    @include baseMargin;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;

    .text {
        span {
            width: 707px;
            height: 59px;
            flex-grow: 0;
            font-size: 50px;
            font-weight: 500;
            white-space: nowrap;
        }
    }

    .products {
        @include baseWidth;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 70dvw;
        max-width: 1320px;
        flex-grow: 0;
        gap: 24px;
        padding: 0;

        .navigation {
            width: 70dvw;
            max-width: 1320px;
            margin-top: 2rem;
            display: flex;
            justify-content: space-between;

            ul {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 0;

                .bold>*{
                    font-weight: 900;
                }
            }

            .filter {
                background-color: $indigo;
                color: $white;
            }
        }

        .product {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 478px;
            cursor: pointer;

            &:hover {
                transform: scale(1.05);
                transition: transform 0.5s;
            }


            .badge-wrapper {
                position: absolute;
                z-index: 1;
                margin-top: -380px;

                .hot,
                .sale {
                    text-transform: capitalize;
                    width: 52px;
                    height: 24px;
                    padding: 4px 12px;

                    color: $white;
                }

                .hot {
                    background-color: $primary;
                }

                .sale {
                    background-color: $indigo;
                }
            }

            img {
                width: 312px;
                height: 400px;
                margin: 0 0 18px;
                border-radius: 0.25rem;
            }

            .product-description {
                height: 60px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 5px;

                >* {
                    font-weight: 600;
                }
            }

            .price-wrap {
                display: flex;
                flex-direction: row;
                gap: 10px;

                .discount-applied {
                    text-decoration: line-through;
                    font-weight: 200;
                    color: red;
                }

                .price.discounted-price {
                    font-weight: 500;
                }
            }
        }
    }
}
</style>
