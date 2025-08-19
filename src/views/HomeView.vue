<template>
    <Hero :label="$t('hero_home_label')" :text="$t('hero_home_text')" :button="true" :img="'hero-img.png'" />
    <Brands />
    <CollectionsShowcase :title="$t('collections_showcase')" />
    <Products :isOnlyBestSeller="false" />
    <Banner />
    <Products :isOnlyBestSeller="true" />
    <Instagram />
</template>

<script setup>
import Hero from "../components/Hero.vue";
import Brands from "../components/Brands.vue";
import CollectionsShowcase from "../components/CollectionsShowcase.vue";
import Products from "../components/Products.vue";
import Banner from "../components/Banner.vue";
import Instagram from "../components/SocialSection.vue";
</script>

<style lang="scss" scoped></style>