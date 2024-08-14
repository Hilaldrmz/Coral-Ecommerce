<template>
    <div class="brands-section">
        <div class="brands">
        <div v-for="(image, index) in brand" :key="index" class="brand-image">
            <img :src="image" alt="Brand Image" />
        </div>
    </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const brand = ref([]);

onMounted(() => {
    const brands = import.meta.glob("../assets/brand/*.{jpg,jpeg,png,gif}");
    for (const path in brands) {
        brands[path]().then((module) => {
        brand.value.push(module.default);
        });
    }
});
</script>

<style lang="scss" scoped>

.brands-section{
    @include baseMargin;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 20px;
    height: fit-content;
    width: 100%;

    .brands{
        @include baseWidth;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: fit-content;

        .brand-image{
            display: flex;
        }
    }
}
</style>
