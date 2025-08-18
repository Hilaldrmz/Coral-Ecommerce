<template>
    <div class="collections-wrapper">
        <div class="collections-list">
            <div class="collections-title">
                <span>{{ title }}</span>
            </div>
            <div v-if="collections.length > 0" class="collection-main">
                <img :src="getImagePath(collections[0].image)" alt="" class="main-image" />
            </div>
            <div class="collections-grid">
                <template v-for="(item, index) in collections">
                    <div v-if="index !== 0" :key="item.id" class="collection-item">
                        <img :src="getImagePath(item.image)" alt="" class="item-image" />
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import data from "../data/data.json";

const props = defineProps({
    title: {
        type: String,
        required: false,
    }
})


function getImagePath(imagePath) {
    const baseURL = import.meta.env.BASE_URL;

    if (import.meta.env.PROD !== true) {
        return imagePath;
    } else {
        return baseURL + imagePath;
    }
}

const collections = ref([]);

onMounted(() => {
    collections.value = data.collections.filter(item => item.image);
});


</script>


<style lang="scss" scoped>
.collections-wrapper {
    @include baseMargin;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    transition: all 0.5s ease;

    @media screen and (max-width: 1840px) {
        transform: scale(0.8);
    }

    .collections-list {
        @include baseWidth;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .collections-title {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 470px;
            width: 50px;
            margin-left: -50px;

            span {
                display: flex;
                align-items: center;
                justify-content: center;
                transform: rotate(-90deg);
                font-size: 34px;
                font-weight: 500;
                white-space: nowrap;
                line-height: normal;
                text-align: center;
                color: #000;
            }
        }

        .collection-main {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            // cursor: pointer;
            flex-wrap: nowrap;

            .main-image {
                width: 614px;
                object-fit: cover;
                border-radius: 0.25rem;
            }
        }

        .collections-grid {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: end;
            align-items: stretch;
            max-width: 690px;
            gap: 20px;
            gap: 10px;

            .collection-item {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0;
                padding: 0;
                height: 340px;
                overflow: hidden;
                // cursor: pointer;
                flex: 1 1 calc(50% - 10px); /// İki kolona böl

                .item-image {
                    width: 340px;
                    margin: 0;
                    padding: 0;
                    object-fit: cover;
                    border-radius: 0.25rem;
                }
            }
        }
    }
}
</style>