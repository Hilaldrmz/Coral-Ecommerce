<script setup>
import { RouterView } from "vue-router";
import './scss/main.css';

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
</script>

<template>
  <div class="main">
    <Header />
    <RouterView />
    <!-- <ThemeToggle /> -->
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100dvw;
  background-color: $white;
}
</style>
