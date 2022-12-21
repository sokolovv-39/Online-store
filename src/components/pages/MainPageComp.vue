<template>
    <div class="wrapper">
        <QuickAddToCartComp v-if="globalStore.cartPopup" />
        <div class="top">
            <HeaderComp />
            <BrandShopIntroComp />
            <div class="content">
                <RecommendedOffersComp />
                <FeaturedItemsComp />
                <DiscountBannerComp />
            </div>
        </div>
        <div class="footer">
            <FooterComp />
        </div>
    </div>
</template>

<script setup>
import HeaderComp from "@/components/HeaderComp.vue"
import BrandShopIntroComp from "@/components/BrandShopIntroComp.vue"
import RecommendedOffersComp from "@/components/RecommendedOffersComp.vue"
import FeaturedItemsComp from "@/components/FeaturedItemsComp.vue"
import DiscountBannerComp from "@/components/DiscountBannerComp.vue"
import FooterComp from "@/components/FooterComp.vue"
import QuickAddToCartComp from "@/components/QuickAddToCartComp.vue"
import { useGlobalStore } from "@/stores/globalStore"

window.scrollTo(0, 0)
const globalStore = useGlobalStore()
</script>

<style scoped lang="scss">
.wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    .top {
        flex-grow: 1;

        .content {
            max-width: 1141px;
            margin: 98px auto;
        }
    }
}
</style>