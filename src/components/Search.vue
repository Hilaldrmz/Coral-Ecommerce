<template>
    <div class="search">
        <input type="text" placeholder="Search">

        <div class="search-recommendation" :class="{ open: searchActive }">
            <div class="search-suggestions">

                <h3> <font-awesome-icon icon="fa-solid fa-arrow-trend-up" /> Popular Searches</h3>
                <ul>
                    <li>Search suggestion 1</li>
                    <li>Search suggestion 2</li>
                    <li>Search suggestion 3</li>
                    <li>Search suggestion 4</li>
                </ul>
            </div>
            <div class="suggested-products">
                <BestSellers message="Top Products" :scale="0.5" display="none" titleSize="40px" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BestSellers from './BestSellers.vue';

const searchActive = ref(false);

onMounted(() => {
    setTimeout(() => {
        searchActive.value = true;
        
    }, 0);
});

</script>

<style lang="scss" scoped>
.search {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: absolute;
    top: 120px;
    z-index: 10000;
    width: 70dvw;
    background-color: transparent;


    input {
        width: 100%;
        padding: 0.5rem;
        background-color: $white;
        border: none;
        border-radius: 0.25rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        z-index: 10000;

        &:focus {
            outline: none;
        }
    }

    .search-recommendation {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        max-height: 0;
        padding: 2rem 1rem;
        background-color: $white;
        border-radius: 0.25rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        cursor: default;
        overflow: hidden;
        z-index: 9999;

        margin-top: -30px;
        max-height: 0;
        opacity: 0.6;
        transition: all 1s ease;

        &.open {
            max-height: 355px;
            margin-top: 10px;
            opacity: 1;
        }

        >* {
            white-space: nowrap;
        }

        .search-suggestions {
            display: flex;
            flex-direction: column;
            width: fit-content;
            justify-content: center;

            h3 {
                margin-left: -2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                font-weight: 500;
            }

            ul {
                list-style: none;
                padding: 0;
                margin: 0;

                li {
                    padding: 0.5rem 0;
                    transition: all 0.3s ease-in;

                    &:hover {
                        background-color: $gray-divider-light;
                        color: black;
                        cursor: pointer;
                    }
                }
            }
        }

        .suggested-products {
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50.5%;
            height: 354px;
        }
    }
}
</style>