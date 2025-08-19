<template>
    <div class="hero">
        <div class="container">
            <div class="content">
                <h1 class="title">{{ label }}</h1>
                <p class="text" v-html="text"></p>
                <Router-link to="/products" v-if="button === true">
                    <Button :label="'Shop Now'" :icon="'bag-shopping'">
                    </Button>
                </Router-link>
            </div>
            <div class="img-section" v-if="img !== null">
                <img :src="`/img/${img}`" alt="">
                <div class="rectangle"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from './common/Buttons.vue';

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: false,
    },
    button: {
        type: Boolean,
        required: false,
        default: false,
    },
    img: {
        type: String,
        required: false,
        default: null,
    }
})

</script>

<style lang="scss" scoped>
.hero {
    background: url(../assets/flower-pattern.png) no-repeat center center/cover $white-soft;
    background-size: contain;

    @include baseMargin;
    padding: 2rem 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        @include baseWidth;


        .content {
            display: flex;
            flex-direction: column;
            width: fit-content;
            color: $black;
            gap: 10px;

            h1 {
                font-size: 74px;
                font-size: 4cqi;
                font-weight: 300;
            }

            p {
                font-size: 30px;
                font-size: 1.5cqi;
                white-space: nowrap;
            }

            button {
                width: fit-content;
                background-color: $indigo;
                color: $white;
                padding: 10px 20px;
                font-size: 16px;
                border-radius: 0.25rem;
                border: none;
                cursor: pointer;
            }
        }

        .img-section {
            display: flex;
            justify-content: center;
            margin-top: 2rem;
            border-radius: 160px 0.25rem 160px 0.25rem;
            background: transparent;
            position: relative;
            z-index: 0;
            transition: all 0.5s ease;

            @media screen and (max-width: 1340px) {
                transform: scale(0.9);
            }

            img {
                border-radius: 160px 0.2rem 160px 0.25rem;
                width: 424px;
                height: 542px;
                flex-grow: 0;
                margin: 0 18px 20px 0;
                object-fit: cover;
            }

            .rectangle {
                width: 424px;
                height: 542px;
                flex-grow: 0;
                margin: 20px 0 0 18px;
                border: solid 2px $gray-divider-light;
                border-radius: 160px 0.25rem 160px 0.25rem;
                margin-left: -400px;
                position: relative;
                z-index: -1;
            }
        }
    }
}
</style>