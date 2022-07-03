<template>
    <div class="wrapper">
        <div class="top">
            <HeaderComp />
            <BreadCrumbsPanelComp />
            <div class="content">
                <div class="sidebar-products">
                    <CatalogSidebarComp class="sidebar" />
                    <div class="products">
                        <SortCatalogComp />
                        <div class="products-cards">
                            <ProductCardComp v-for="item of products" :key="item.id_product" :title="item.product_name"
                                :price="item.price" :image="item.image" />
                        </div>
                        <CatalogControlPanelComp />
                    </div>
                </div>
            </div>
            <AdvantagesBlockComp />
        </div>
        <div class="footer">
            <FooterComp />
        </div>
    </div>
</template>

<script setup>
import HeaderComp from "@/components/HeaderComp.vue"
import BreadCrumbsPanelComp from "@/components/BreadCrumbsPanelComp.vue"
import FooterComp from '@/components/FooterComp.vue'
import SortCatalogComp from '@/components/SortCatalogComp.vue'
import CatalogSidebarComp from "@/components/CatalogSidebarComp.vue"
import ProductCardComp from "@/components/ProductCardComp.vue"
import CatalogControlPanelComp from "@/components/CatalogControlPanelComp.vue";
import AdvantagesBlockComp from "@/components/AdvantagesBlockComp.vue";
import { useServerRequestsStore } from "@/stores/serverRequests.js"
import { ref, onMounted } from "vue"

window.scrollTo(0, 0)
const products = ref([])
const serverRequests = useServerRequestsStore()
onMounted(() => {
    serverRequests.getJSON('http://localhost:3000/api/products')
        .then(data => {
            for (let item of data) {
                products.value.push(item)
            }
        })
})
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

            .sidebar-products {
                display: flex;

                .sidebar {
                    flex: 1;
                }

                .products {
                    flex: 4;

                    .products-cards {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
                        column-gap: 5vw;
                    }
                }
            }
        }
    }

    .footer {
        height: 975px;
    }
}
</style>