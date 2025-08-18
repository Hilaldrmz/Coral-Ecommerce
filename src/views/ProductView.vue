<template>
    <section class="product-section" v-if="selectedProduct">
        <button class="back" @click="navigateToBack()">
            <font-awesome-icon icon="fa-solid fa-chevron-left" />
        </button>

        <div class="product">
            <img class="product-img" :src="getImagePath(selectedProduct.image)" :alt="selectedProduct.name" />

            <div class="right-section">
                <div class="top-section">
                    <div class="product-description">
                        <h3>{{ selectedProduct.name }}</h3>
                        <p>{{ selectedProduct.description }}</p>
                    </div>

                    <div class="other-details">
                        <div class="sizes" v-if="selectedProduct.sizes && selectedProduct.sizes.length > 0">
                            <label>Select Size</label>
                            <div class="size-options">
                                <button v-for="size in selectedProduct.sizes" :key="size"
                                    :class="{ active: size === selectedSize }" @click="selectedSize = size">
                                    {{ size }}
                                </button>
                            </div>
                        </div>

                        <div class="color-section" v-if="selectedProduct.colors && selectedProduct.colors.length > 0">
                            <label>Select Color</label>
                            <div class="color-options">
                                <button v-for="color in selectedProduct.colors" :key="color"
                                    :class="{ active: color === selectedColor }" @click="selectedColor = color"
                                    :style="{ backgroundColor: color, border: color === selectedColor ? `3px solid ${color}` : '' }">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comments-section">
                    <h3>User Comments</h3>
                    <ul>
                        <li v-for="comment in comments" :key="comment.id">
                            <strong>{{ comment.username }}</strong> - <span>{{ comment.rating }} stars</span>
                            <p>{{ comment.comment }}</p>
                        </li>
                    </ul>
                </div>
                <div class="bottom-section">
                    <div class="price-wrap">
                        <p class="price orj-price" :class="{ 'discount-applied': selectedProduct.discount > 0 }"> ${{
                            selectedProduct.price }}</p>
                        <p class="price discounted-price"
                            v-if="selectedProduct.price !== discountedPrice(selectedProduct)">
                            ${{
                                discountedPrice(selectedProduct) }}</p>
                    </div>
                    <Button :class="'add-to-bag'" :success="isAddedToCart"
                        :label="isAddedToCart ? 'Added' : 'Add to Bag'" :icon="'bag-shopping'" @click="addToCart" />
                </div>
            </div>
        </div>
    </section>
    <Products message="You Might Also Like" class="also-like" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from "vue-router";
import { useCartStore } from '../stores/cart';
import data from "../data/data.json";
import commentsData from "../data/comments.json";
import Button from '../components/common/Buttons.vue';
import Products from '@/components/Products.vue';

function getImagePath(imagePath) {
    const baseURL = import.meta.env.BASE_URL;

    if (import.meta.env.PROD !== true) {
        return imagePath;
    } else {
        return baseURL + imagePath;
    }
}

const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();

const products = ref(data.products);

const selectedProduct = computed(() => {
    const productId = route.params.id;
    return products.value.find(product => product.id === parseInt(productId));
});

const navigateToBack = () => {
    router.back();
};

const discountedPrice = (product) => {
    if (product.discount > 0) {
        const discountAmount = product.price * (product.discount / 100);
        return product.price - discountAmount;
    }
    return product.price;
};

const selectedSize = ref('');
const selectedColor = ref('');
const comments = ref([]);
const isAddedToCart = ref(false);

const addToCart = () => {
    if (!selectedColor.value) {
        alert('Please select a color.');
        return;
    }
    const productToAdd = {
        id: selectedProduct.value.id,
        name: selectedProduct.value.name,
        image: selectedProduct.value.image,
        price: discountedPrice(selectedProduct.value),
        size: selectedSize.value,
        color: selectedColor.value,
        url: route.fullPath,
        quantity: 1
    };
    cartStore.addToCart(productToAdd);
    isAddedToCart.value = true;
    console.log(`Product added to bag: ${selectedProduct.value.name}, Size: ${selectedSize.value}, Color: ${selectedColor.value}`);

    setTimeout(() => {
        isAddedToCart.value = false;
    }, 3000);
};

onMounted(() => {
    comments.value = commentsData;
});

</script>

<style lang="scss" scoped>
.product-section {
    @include baseMargin;
    display: flex;
    flex-direction: column;
    justify-content: start;
    min-height: min-content;
    overflow: hidden;
    border-bottom: $white-soft 1px solid;

    .product {
        @include baseWidth;
        width: 100dvw;
        display: flex;
        // flex-wrap: wrap;
        flex-direction: row;
        justify-content: start;
        transition: all 0.5 ease;

        .product-img {
            height: calc(100vh - 120px); // 100vh - header height
        }

        .right-section {
            display: flex;
            // flex-wrap: inherit;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            // max-width: 67dvw;
            // max-height: 88dvh;
            width: 100%;
            padding: 0;
            margin: 0;

            .top-section {
                display: flex;
                padding: 2rem 0 0 2rem;

                .product-description {
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    padding: 2rem 2rem 0 2rem;
                    gap: 20px;

                    >* {
                        font-size: 2rem;
                        font-weight: 600;
                    }

                    p {
                        font-size: 1rem;
                        font-weight: 400;
                    }
                }

                .other-details {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 2rem;
                    gap: 20px;

                    .sizes {
                        display: flex;
                        flex-direction: column;
                        width: 100%;

                        label {
                            font-size: 16px;
                            font-weight: bold;
                            margin-bottom: 10px;
                            display: block;
                        }

                        .size-options {
                            display: flex;
                            gap: 10px;
                            flex-wrap: wrap;

                            button {
                                padding: 15px 20px;
                                font-size: 16px;
                                border: 1px solid #ccc;
                                background: white;
                                cursor: pointer;
                                border-radius: 10%;
                                transition: background 0.3s, border-color 0.3s;

                                &.active {
                                    background: $primary;
                                    color: white;
                                    border-color: $primary;
                                }

                                &:hover {
                                    background: $primary;
                                    color: white;
                                    border-color: $primary;
                                }
                            }
                        }
                    }

                    .color-section {
                        label {
                            font-size: 16px;
                            font-weight: bold;
                            margin-bottom: 10px;
                            display: block;
                        }

                        .color-options {
                            display: flex;
                            gap: 10px;
                            flex-wrap: wrap;

                            button {
                                height: 35px;
                                width: 35px;
                                border: none;
                                cursor: pointer;
                                border-radius: 100%;

                                &.active {
                                    box-shadow: inset 0 0 0 3px white;
                                }

                                &:hover {
                                    border: solid 3px white;
                                }
                            }
                        }
                    }
                }
            }
        }

        .comments-section {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
            width: 100%;
            padding: 0 2rem;

            h3 {
                font-size: 1.5rem;
                margin-bottom: 10px;
                padding: 0 2rem;
            }

            ul {
                padding: 0 2rem;

                li {
                    margin-bottom: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;

                    strong {
                        font-weight: bold;
                    }

                    span {
                        color: #666;
                    }
                }
            }
        }

        .bottom-section {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            background: $white-soft;
            margin: 0;
            z-index: 1;

            .price-wrap {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 20px;
                width: 50%;
                font-size: 1.5rem;

                .discount-applied {
                    text-decoration: line-through;
                    font-size: 1rem;
                    font-weight: 200;
                    color: red;
                }

                .price.discounted-price {
                    font-size: 1cqi;
                    font-weight: 500;
                }
            }

            .add-to-bag {
                padding: 10px;
                background: $indigo;
                color: $white;
                border: none;
                cursor: pointer;
                padding: 1rem 0;
                width: 50%;
                height: 100%;
                font-size: 1cqi;

                position: relative;
                overflow: hidden;
                transition: color 0.3s ease;


                &::before,
                &::after {
                    content: '';
                    position: relative;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    transition: all 0.25s ease;
                }

                &:active {
                    transform: translateY(3px);
                }

                &.success {
                    background-image: linear-gradient(to right, $success 50%, transparent 50%);
                    background-size: 200% 100%;
                    animation: slideInBackground 3s forwards;
                    background-position: 100%;
                }
            }
        }
    }

    .back {
        cursor: pointer;
        position: absolute;
        top: 130px;
        left: 20px;
        background: transparent;
        border: none;
        font-size: 24px;

        &:hover {
            transform: translateX(-3px);
            transition: all 0.3s ease-in;
        }
    }

    @media screen and (max-width: 1276px) {
        border: none;

        .product {
            // flex-direction: column;
            align-items: start;

            .product-img {
                height: 400px !important;
            }

            .right-section {
                border-left: $white-soft 1px solid;

                .top-section {
                    flex-direction: column;
                }
            }
        }
    }

}

.also-like {
    margin: 5rem 0;
}

@keyframes slideInBackground {
    0% {
        background-position: 100%;
    }

    50% {
        background-position: 0%;
    }

    100% {
        background-position: 100%;
    }
}
</style>
