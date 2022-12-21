<template>
    <router-link to="/" @click="reloadPage">
        <img src="@/assets/images/Brand_image.jpg" alt="">
        <h1>BRAN<span>D</span></h1>
    </router-link>
</template>

<script setup>
function reloadPage() {
    window.location.reload();
}
</script>

<style lang="scss">
a:link {
    text-decoration: none !important;
    color: black;
}

a {
    display: flex;
    align-items: center;
    margin-right: 1%;

    h1 {
        margin-left: 3%;
        margin-top: 5%;
        color: black;

        span {
            color: #f16d7f;
        }
    }
}
</style>