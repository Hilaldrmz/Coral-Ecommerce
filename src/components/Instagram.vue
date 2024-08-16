<template>
    <section class="instagram-section">
        <p>Follow Products And Discounts On Instagram</p>

        <div class="posts">
            <div v-for="post in instagram" :key="post.id" class="post">
                <img :src="getImagePath(post.image)" alt="">
            </div>
        </div>

        <p>Or Subscribe To The Newsletter</p>

        <form action="" class="submit-form">
            <label for="email" class="email-label">
                <input name="email" id="email" type="email" placeholder="Email" required />
            </label>
            <input type="submit" value="Submit" id="submit-btn" />
        </form>
    </section>
</template>

<script setup>
import { ref } from "vue";
import data from "../data/data.json";

const baseURL = import.meta.env.BASE_URL;

function getImagePath(imagePath) {
    return baseURL + imagePath;
}
const instagram = ref(data.instagram);

</script>

<style lang="scss" scoped>
.instagram-section {
    // @include baseMargin;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: $white-soft;
    height: 755px;
    width: 100%;
    transition: all 0.5s ease;

    @media screen and (max-width: 1840px) {
        transform: scale(0.8);
        width: 130%;
    }

    .posts {
        @include baseWidth;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        .post {
            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 100px;
            background: linear-gradient(45deg,
                    #ffa95f 5%,
                    #f99c4a 15%,
                    #f47838 30%,
                    #e75157 45%,
                    #d92d7a 70%,
                    #cc2a92 80%,
                    #c32e92 95%);

            img {
                padding: 3px;
                width: 200px;
                height: 200px;
                object-fit: cover;
                border-radius: 100px;
                cursor: pointer;

                &:hover {
                    transform: scale(1.05);
                    transition: transform 0.5s;
                }
            }
        }
    }

    p {
        font-size: 50px;
        font-weight: 500;
        white-space: nowrap;
    }

    .submit-form {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        .email-label {
            #email {
                width: 643px;
                height: 32px;
                background: transparent;
                border: none;
                border-bottom: $black-muted 1px solid;

                &:focus {
                    outline: none;
                }
            }
        }

        #submit-btn {
            width: 91px;
            height: 32px;
            background: transparent;
            border: none;
            border-bottom: $black-muted 1px solid;
            cursor: pointer;
        }

    }
}
</style>