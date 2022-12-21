<template>
    <div class="wrapper">
        <div class="top">
            <HeaderComp />
            <BreadCrumbsPanelComp />
            <div class="content">
                <div class="sidebar-products">
                    <CatalogSidebarComp class="sidebar" />
                    <div class="products">
                        <SortCatalogComp @sortChange="sortFunc" />
                        <div class="products-cards">
                            <ProductCardComp v-for="item of shownProducts || []" :key="item.id_product"
                                :id_product="item.id_product" :title="item.product_name" :price="item.price"
                                :image="item.image" />
                        </div>
                        <CatalogControlPanelComp :quantity-overall="overallQuantity" :sort-quantity="sortQuantity"
                            @turn-page="pageChange" />
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
import HeaderComp from "@/components/HeaderComp.vue";
import BreadCrumbsPanelComp from "@/components/BreadCrumbsPanelComp.vue";
import FooterComp from '@/components/FooterComp.vue';
import SortCatalogComp from '@/components/SortCatalogComp.vue';
import CatalogSidebarComp from "@/components/CatalogSidebarComp.vue";
import ProductCardComp from "@/components/ProductCardComp.vue";
import CatalogControlPanelComp from "@/components/CatalogControlPanelComp.vue";
import AdvantagesBlockComp from "@/components/AdvantagesBlockComp.vue";
import { useServerRequestsStore } from "@/stores/serverRequests.js";
import { onMounted, ref } from "vue";

window.scrollTo(0, 0);
let products = ref([]);
const filteredProducts = ref([]);
const serverRequests = useServerRequestsStore();
const sortQuantity = ref(9);
const shownProducts = ref([]);
const overallQuantity = ref(58);

function sortFunc(rangeValue, sizes, styles, quantity, sortType) {
    filteredProducts.value = products.value;
    switch (sortType) {
        case 'price':
            filteredProducts.value.sort((a, b) => parseInt(a.price) - parseInt(b.price));
            break;
        case 'name':
            filteredProducts.value.sort((a, b) => a.product_name.localeCompare(b.product_name));
            break;
        case 'popularity':
            filteredProducts.value.sort((a, b) => a.popularity - b.populatity);
            break;
        case 'news':
            filteredProducts.value.sort((a, b) => a.news - b.news);
            break;
    }
    filteredProducts.value = filteredProducts.value.filter(product => parseInt(product.price) <= parseInt(rangeValue));
    if (sizes.length !== 0) {
        filteredProducts.value = filteredProducts.value.filter(product => {
            const sizesArr = product.sizes.split(',');
            let isSuitable = false;
            sizesCycle: for (let i = 0; i < sizes.length; i++) {
                for (let j = 0; j < sizesArr.length; j++) {
                    if (sizesArr[j] === sizes[i]) {
                        isSuitable = true;
                        break sizesCycle
                    }
                }
            }
            if (isSuitable) return product
        })
    }
    if (styles[0] || styles[1]) {
        filteredProducts.value = filteredProducts.value.filter(product => {
            const stylesMod = [];
            if (styles[0]) stylesMod[0] = styles[0].innerHTML.charAt(0).toLowerCase() + styles[0].innerHTML.slice(1);
            if (styles[1]) stylesMod[1] = styles[1].innerHTML.charAt(0).toLowerCase() + styles[1].innerHTML.slice(1);
            for (let i = 0; i < stylesMod.length; i++) {
                if (product.style === stylesMod[i]) return product
            }
        })
    }
    sortQuantity.value = quantity;
    overallQuantity.value = filteredProducts.value.length;
    pageChange(1);
}
function pageChange(n) {
    shownProducts.value = filteredProducts.value.slice((n - 1) * sortQuantity.value, (n - 1) * sortQuantity.value + sortQuantity.value);
}

onMounted(() => {
    serverRequests.getJSON('http://localhost:3000/api/products/getProducts')
        .then(data => {
            for (let item of data) {
                products.value.push(item)
            }
            filteredProducts.value = products.value;
            shownProducts.value = filteredProducts.value.slice(0, sortQuantity.value);
            overallQuantity.value = products.value.length;
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