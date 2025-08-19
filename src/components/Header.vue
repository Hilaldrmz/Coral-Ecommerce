<template>
    <header>
        <div class="header-content">
            <RouterLink to="/" class="logo-router">
                <Logo class="logo"></Logo>
            </RouterLink>
            <div class="user">
                <LocaleSelect />
                <font-awesome-icon icon="user" @mouseover="showDropdown('user')" />
                <div class="dropdown" v-if="activeDropdown === 'user'" ref="userDropdown" @mouseleave="hideDropdown()">
                    <ul>
                        <RouterLink to="/orders">
                            <li>{{ $t('my_orders') }}</li>
                        </RouterLink>
                        <hr>
                        <li>{{ $t('user_preferences') }}</li>
                        <hr>
                        <li>{{ $t('notifications') }}</li>
                        <hr>
                        <li>{{ $t('sign_out') }}</li>
                    </ul>
                </div>

                <RouterLink to="/cart" class="user-items" @mouseover="showDropdown('cart')">
                    <font-awesome-icon icon="bag-shopping" />
                    <span v-if="cartItemCount > 0"> {{ cartItemCount }}</span>
                </RouterLink>
                <CartDropdown :activeDropdown="activeDropdown" @setRef="setCartDropdownRef"
                    @mouseleave="hideDropdown()" />

            </div>
        </div>
        <hr>
    </header>
</template>

<script setup>
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import { useCartStore } from '../stores/cart';
import { RouterLink } from "vue-router";
import Logo from '../components/Logo.vue'
import CartDropdown from '../components/CartDropdown.vue'
import LocaleSelect from './LocaleSelect.vue';

const cartStore = useCartStore();
const cartItemCount = computed(() => cartStore.cartItemCount)

const activeDropdown = ref(null);
const userDropdown = ref(null);
const cartDropdown = ref(null);
const searchActive = ref(false);
const searchComponent = ref(null);
let hideTimeout = null;

const showDropdown = (dropdown) => {
    clearTimeout(hideTimeout);
    activeDropdown.value = dropdown;
};

const hideDropdown = () => {
    hideTimeout = setTimeout(() => {
        activeDropdown.value = null;
    }, 100);
};
const handleMouseMove = (event) => {
    const dropdown = activeDropdown.value === 'user' ? userDropdown.value : cartDropdown.value;
    if (dropdown && dropdown.$el && !dropdown.$el.contains(event.target)) {
        hideDropdown();
    }
};

const setCartDropdownRef = (ref) => {
    cartDropdown.value = ref;
};

const handleClickOutside = (event) => {
    if (
        searchActive.value &&
        searchComponent.value &&
        !searchComponent.value.$el.contains(event.target) &&
        !event.target.classList.contains('search')
    ) {
        searchActive.value = false;
    }
};

watch(activeDropdown, (newValue) => {
    if (newValue) {
        clearTimeout(hideTimeout);
    }
});

onMounted(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('click', handleClickOutside);
});

</script>

<style lang="scss" scoped>
header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
    background-color: $white-soft;
    padding: 1rem 0;


    .header-content {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        width: 100%;

        @include baseWidth;

        .logo-router {
            grid-column: 2;
            justify-self: center;
            align-self: center;

            .logo {
                cursor: pointer;
            }
        }

        .user {
            display: flex;
            flex-direction: row;
            justify-content: end;
            align-items: center;
            width: 127px;
            gap: 40px;
            cursor: pointer;
            grid-column: 3;
            justify-self: end;

            .user-items {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                transition: all 0.5s ease;

                span {
                    font-size: 1em;
                    font-weight: bold;
                    text-align: end;
                    padding: 0;
                    margin: 0;
                    height: max-content;
                    background-color: $white;
                    border: $gray-divider-light 1px solid;
                    border-radius: 0.25rem;
                    padding: 0 7px;
                    box-shadow: inset 0 0 2px #b2b2b2;
                }
            }

            .dropdown {
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                top: 55px;
                background-color: $white;
                border: $gray-divider-light 1px solid;
                border-radius: 0.25rem;
                width: 150px;
                z-index: 10000;
                overflow: hidden;

                ul {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-content: center;
                    padding: 0;

                    li {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 0;
                        padding: 5px;
                        transition: all 0.3ms ease-in;

                        &:hover {
                            background-color: $gray-divider-light;
                            color: black;
                        }
                    }

                    hr {
                        width: 150px;
                        margin: 0;
                        padding: 0;
                    }
                }
            }
        }
    }

    hr {
        @include baseWidth;
        margin: 10px 0;
        border: 1px solid $gray-divider-light;
    }
}
</style>