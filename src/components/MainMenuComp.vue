<template>
    <nav class="navigation">
        <hr class="menu_line">
        <ul class="menu_list">
            <MainMenuElementComp>HOME</MainMenuElementComp>
            <MainMenuElementComp>MEN</MainMenuElementComp>
            <MainMenuElementComp>WOMEN</MainMenuElementComp>
            <MainMenuElementComp move="-200px">ACCOSERIESE</MainMenuElementComp>
            <MainMenuElementComp reversePos="true">FEATURED</MainMenuElementComp>
            <MainMenuElementComp reversePos="true">HOT DEALS</MainMenuElementComp>
        </ul>
    </nav>
</template>

<script setup>
import MainMenuElementComp from "./MainMenuElementComp.vue"
</script>

<style scoped lang="scss">
.navigation {
    margin-top: 24px;

    .menu_line {
        color: #ececec;
        background-color: #ececec;
        border: none;
        height: 2px;
    }

    .menu_list {
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
        width: 60%;
    }
}
</style>