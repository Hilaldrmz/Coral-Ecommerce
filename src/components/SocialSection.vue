<template>
    <section class="social-section">
        <p>Follow Products And Discounts On Instagram</p>

        <div class="instagram-posts">
            <div v-for="post in instagram" :key="post.id" class="instagram-post">
                <img :src="getImagePath(post.image)" alt="">
            </div>
        </div>

        <p>Or Subscribe To The Newsletter</p>

        <form @submit.prevent="handleSubmit" class="newsletter-form">
            <label for="email" class="newsletter-email-label">
                <input name="email" id="email" type="email" placeholder="Email" required />
            </label>
            <input type="submit" value="Submit" id="newsletter-submit-btn" />
        </form>

        <dialog ref="dialogRef">
            <p>Thank you for subscribing!</p>
            <button @click="closeDialog">Close</button>
        </dialog>
    </section>
</template>

<script setup>
import { ref } from "vue";
import data from "../data/data.json";

const instagram = ref(data.instagram);
const dialogRef = ref(null);

function getImagePath(imagePath) {
    const baseURL = import.meta.env.BASE_URL;

    if (import.meta.env.PROD !== true) {
        return imagePath;
    } else {
        return baseURL + imagePath;
    }
}

function handleSubmit() {
    dialogRef.value.showModal();
}

function closeDialog() {
    dialogRef.value.close();
}
</script>

<style lang="scss" scoped>
.social-section {
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

    .instagram-posts {
        @include baseWidth;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        .instagram-post {
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
        font-size: 34px;
        font-weight: 500;
        white-space: nowrap;
    }

    .newsletter-form {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        .newsletter-email-label {
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

        #newsletter-submit-btn {
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