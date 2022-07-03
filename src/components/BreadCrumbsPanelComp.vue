<template>
    <div>
        <h2>NEW ARRIVALS</h2>
        <div class="bread_crumbs">
            <a href="index.html">HOME/</a>
            <a href="index.html">MEN/</a>
            <a href="product.html">NEW ARRIVALS</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
div {
    display: flex;
    justify-content: space-between;
    height: 148px;
    background-color: #f8f3f4;
    align-items: center;

    h2 {
        font-family: Lato;
        font-size: 24px;
        line-height: 20px;
        font-weight: 900;
        text-transform: uppercase;
        color: #f16d7f;
        margin-left: 100px;
    }

    .bread_crumbs {
        margin-right: 160px;
        height: min-content;

        a {
            text-decoration: none;
            color: #636363;
            height: 100%
        }

    }

    .bread_crumbs a:last-of-type {
        color: #f16d7f;
    }
}
</style>