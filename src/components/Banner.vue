<template>
    <div class="banner-section">
        <div class="discription">
            <img src="../assets/banner/Zara-Logo.png" alt="" class="logo">
            <p>Lustrous yet understated. The new evening <br>
                wear collection exclusively offered at the <br>
                reopened Giorgio Armani boutique <br>
                in Los Angeles.</p>
            <button>See Collection</button>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.banner-section {
    @include baseMargin;
    background-image: url("../assets/banner/bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: end;
    align-items: center;
    height: 776px;
    width: 100%;


    .discription {
        margin: 270px 440px auto auto;
        gap: 50px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;

        // .logo {}

        p {
            max-width: 504px;
            color: white;
            font-size: 26px;
            font-size: 1.35cqi;
            line-height: 1.54;

        }

        button {
            max-width: 200px;
            max-height: 50px;
            background-color: $white-soft;
            color: $black-soft;
            font-size: 20px;
            font-size: 1cqi;
            border: none;
            border-radius: 0.25rem;
            cursor: pointer;
        }
    }
}
</style>