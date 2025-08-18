<template>
    <ProductCard :products="products" filtersBar="false" :navigateToProduct="navigateToProduct"
        :getImagePath="getImagePath" :discountedPrice="discountedPrice" :onlyBestSeller="true" message="Best Sellers" />
</template>

<script setup>
import { ref, computed } from "vue";
import { RouterLink, useRouter } from "vue-router";
import data from "../data/data.json";
import ProductCard from "./common/ProductCard.vue";

const props = defineProps({
    message: {
        type: String,
        required: true,
    },
    titleSize: {
        type: String,
        default: "50px",
    },
    scale: {
        type: Number,
        default: 1
    },
    display: {
        type: String,
        default: "flex"
    }
})

function getImagePath(imagePath) {
    const baseURL = import.meta.env.BASE_URL;

    if (import.meta.env.PROD !== true) {
        return imagePath;
    } else {
        return baseURL + imagePath;
    }
}

const products = ref(data.products);

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
</style>
