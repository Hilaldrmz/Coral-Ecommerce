<template>
    <Hero label="Collections" text="You can explore ans shop many different collection<br>
    from various barands here." :button="true" :img="'hero-img.png'"/>
    <Brands />
    <Explore :title="'Explore new and popular styles'" />
    <Products :isOnlyBestSeller="false" />
    <Banner />
    <Products :isOnlyBestSeller="true" />
    <Instagram />
</template>

<script setup>
import Hero from "../components/Hero.vue";
import Brands from "../components/Brands.vue";
import Explore from "../components/CollectionsShowcase.vue";
import Products from "../components/Products.vue";
import Banner from "../components/Banner.vue";
import Instagram from "../components/SocialSection.vue";
</script>

<style lang="scss" scoped></style>