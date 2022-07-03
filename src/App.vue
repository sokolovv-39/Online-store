<script setup>
import { ref, computed } from 'vue'
import MainPageComp from "@/components/pages/MainPageComp.vue"
import CatalogPageComp from "@/components/pages/CatalogPageComp.vue"
import ShoppingCartPageComp from '@/components/pages/ShoppingCartPageComp.vue'
import NotFound from "@/components/pages/NotFound.vue"
import { useGlobalStatesStore } from "@/stores/globalStates.js"
import QuickAddToCartComp from "@/components/QuickAddToCartComp.vue"

const routes = {
    '/': MainPageComp,
    '/catalog': CatalogPageComp,
    '/shopping_cart': ShoppingCartPageComp
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
})

const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound
})

const globalStates = useGlobalStatesStore()
</script>

<template>
    <QuickAddToCartComp v-if="globalStates.cartPopup" />
    <a href="#/">Home</a>
    <a href="#/catalog">Catalog</a>
    <a href="#/shopping_cart">Shopping Cart</a>
    <a href="#/non-existent-link">Broken link</a>
    <component :is="currentView" />
</template>