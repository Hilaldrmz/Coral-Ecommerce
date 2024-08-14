<template>
    <div :class="{ 'dark-theme': isDarkTheme }">
        <button @click="toggleTheme">
            <font-awesome-icon icon="moon" />
            <!-- <font-awesome-icon icon="sun" /> -->
        </button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDarkTheme = ref(false);

const toggleTheme = () => {
    isDarkTheme.value = !isDarkTheme.value;
    localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light');
};

onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        isDarkTheme.value = true;
    }
});
</script>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: transparent;
    width: max-content;
    padding: 0;
    margin: 0;

    position: fixed;
    bottom: 90px;
    right: 0;

    border-radius: 100px 0 0 100px;
    // border: 1px solid #4f596614;
    box-shadow: 0 8px 24px 0 rgba(0, 0, 0, .08);

    button {
        width: 60px;
        height: 30px;
        padding: 0;
        margin: 0;

        border-radius: 100px 0 0 100px;
        border: 1px solid #4f596614;
        background: white;
        box-shadow: 0 8px 24px 0 rgba(0, 0, 0, .08);
    }
}
</style>