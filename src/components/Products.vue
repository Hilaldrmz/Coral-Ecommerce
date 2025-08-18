<template>
    <ProductCard filtersBar="true"
        :message="isOnlyBestSeller ? 'Best Sellers' : 'Or find something you love among our products'"
        :onlyBestSeller="isOnlyBestSeller" />
</template>

<script setup>
import ProductCard from './common/ProductCard.vue'

const props = defineProps({
    isOnlyBestSeller: {
        type: Boolean,
        default: false,
    }
})
</script>

<style lang="scss" scoped></style>
