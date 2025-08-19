<template>
    <div class="locale-dropdown" @click="toggleDropdown">
        <button class="dropdown-toggle" aria-label="Select Language">
            <img :src="selectedLocale === 'en' ? usaFlag : turkishFlag" :alt="selectedLocale" class="flag-icon" />
            <span class="arrow">▼</span>
        </button>
        <div v-if="dropdownOpen" class="dropdown-menu">
            <button class="dropdown-item" @click.stop="setLocale('en')">
                <img :src="usaFlag" alt="English" class="flag-icon" />
            </button>
            <button class="dropdown-item" @click.stop="setLocale('tr')">
                <img :src="turkishFlag" alt="Türkçe" class="flag-icon" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const selectedLocale = ref(locale.value);
const dropdownOpen = ref(false);
const usaFlag = new URL('../assets/flags/usa-flag.png', import.meta.url).href;
const turkishFlag = new URL('../assets/flags/turkish-flag.png', import.meta.url).href;

function setLocale(lang) {
    selectedLocale.value = lang;
    locale.value = lang;
    dropdownOpen.value = false;
}

function toggleDropdown() {
    dropdownOpen.value = !dropdownOpen.value;
}
</script>

<style scoped>
.locale-dropdown {
    position: relative;
    right: 20px;
    z-index: 20;
    user-select: none;
}

.dropdown-toggle {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    border-radius: 4px;
    outline: none;
    display: flex;
    align-items: center;
    gap: 4px;
}

.arrow {
    font-size: 14px;
    margin-left: 4px;
}



.dropdown-menu {
    position: absolute;
    left: -5px;
    top: 30px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    padding: 4px 0;
}

.dropdown-item {
    background: none;
    border: none;
    padding: 6px 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    transition: background 0.2s;
}

.dropdown-item:hover {
    background: #f0f0f0;
}

.flag-icon {
    width: 28px;
    height: 20px;
    object-fit: cover;
    display: block;
}
</style>
