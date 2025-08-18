<template>
    <div class="navigation">
        <ul>
            <li class="bold">
                <RouterLink to="/products">All Products</RouterLink>
            </li>
            <li><a href="">T-Shirt</a></li>
            <li><a href="">Hoodies</a></li>
            <li><a href="">Jacket</a></li>
        </ul>

        <button class="filter">
            <font-awesome-icon icon="filter" />
            Filter
        </button>
    </div>
</template>

<style lang="scss" scoped>
.navigation {
    width: 70dvw;
    max-width: 1320px;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    ul {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0;

        .bold>* {
            font-weight: 900;
        }
    }

    .filter {
        background-color: $indigo;
        color: $white;
    }
}
</style>