<template>
    <header>
        <div class="top_header">
            <div class="left_part">
                <router-link to="/">
                    <BrandLogoComp />
                </router-link>
                <HeaderSearchComp />
            </div>
            <div class="right_part">
                <MyAccountComp v-if="globalStore.isSignIn" />
                <SignInUpComp v-else />
            </div>
        </div>
        <MainMenuComp />
    </header>
</template>

<script setup>
import BrandLogoComp from "./BrandLogoComp.vue"
import HeaderSearchComp from "./HeaderSearchComp.vue"
import MyAccountComp from "./MyAccountComp.vue"
import MainMenuComp from "./MainMenuComp.vue"
import SignInUpComp from "./SignInUpComp.vue"
import { useGlobalStore } from "@/stores/globalStore.js"
import { useUserStore } from "@/stores/userStore"

const globalStore = useGlobalStore()
console.log(useUserStore().name)
</script>

<style scoped lang="scss">
header {
    .top_header {
        display: flex;
        justify-content: space-between;
        width: 88%;
        margin: 0 auto;
    }


    .left_part {
        display: flex;
        align-items: center;
        justify-content: right;
        margin-top: 25px;
        flex: 55%;
    }

    .right_part {
        display: flex;
        align-items: flex-start;
        justify-content: right;
        flex: 45%;
    }
}
</style>