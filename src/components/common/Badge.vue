<template>
    <span class="badge" :class="product.badge">{{ product.badge }}</span>
</template>

<script setup>

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss" scoped>
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
</style>