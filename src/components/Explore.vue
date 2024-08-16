<template>
    <div class="explore-section">

        <div class="collections">
            <div class="text">
                <span>Explore new and popular styles</span>
            </div>
            <div v-if="collections.length > 0" class="collection single">
                <img :src="getImagePath(collections[0].image)" alt="" class="big" />
            </div>
            <div class="multi-collection-section">
                <template v-for="(item, index) in collections">
                    <div v-if="index !== 0" :key="item.id" class="collection multi">
                        <img :src="getImagePath(item.image)" alt="" class="small" />
                    </div>
                </template>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import data from "../data/data.json";

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
.explore-section {
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

    .collections {
        @include baseWidth;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .text {
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
                white-space: nowrap;
                line-height: normal;
                text-align: center;
                color: #000;
            }
        }

        .single {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            cursor: pointer;
            flex-wrap: nowrap;

            .big {
                width: 614px;
                object-fit: cover;
                border-radius: 0.25rem;
            }
        }

        .multi-collection-section {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: end;
            align-items: stretch;
            max-width: 690px;
            gap: 20px;
            gap: 10px;

            .multi {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0;
                padding: 0;
                height: 340px;
                overflow: hidden;
                cursor: pointer;
                flex: 1 1 calc(50% - 10px); // İki kolona böl

                .small {
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