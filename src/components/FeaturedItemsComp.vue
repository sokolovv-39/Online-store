<template>
    <section class="featured-items">
        <h3 class="featured-items-title">Featured Items</h3>
        <p class="featured-items-text">Shop for items based on what we featured in this week</p>
        <div class="products-wrapper">
            <ProductCardComp v-for="item of products" :key="item.id_product" :id_product="item.id_product"
                :title="item.product_name" :price="item.price" :image="item.image" />
        </div>
        <router-link to='/catalog' class="browse_all_products">
            <p>Browse All Products</p><font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow-right" />
        </router-link>
    </section>
</template>

<script setup>
import { useServerRequestsStore } from "@/stores/serverRequests.js"
import { ref, onMounted } from "vue";
import ProductCardComp from "./ProductCardComp.vue"

const products = ref([])
const serverRequests = useServerRequestsStore()

onMounted(() => {
    serverRequests.getJSON('http://localhost:3000/api/products/getProducts')
        .then(data => {
            for (let i = 0; i < 8; i++) {
                products.value.push(data[i])
            }
        })
    console.log(products.value)
})
</script>

<style scoped lang="scss">
.featured-items {
    width: 100%;
    display: flex;
    flex-direction: column;

    .featured-items-title {
        color: #222222;
        font-family: Lato;
        font-size: 30px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 16px;
    }

    .featured-items-text {
        color: #9f9f9f;
        font-family: Lato;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
    }

    .products-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .browse_all_products {
        display: flex;
        height: 48px;
        width: 20%;
        margin: 20px auto 113px auto;
        justify-content: center;
        align-items: center;
        background-color: #f16d7f;
        border: 1px solid #f16d7f;
        cursor: pointer;
        text-decoration: none;
        color: #fff;
        transition: all 0.5s;

        p {
            margin-right: 2%;
            color: #ffffff;
            font-family: Lato;
            font-size: 16px;
            font-weight: 700;
            line-height: 48px;
        }

        .arrow-right {
            margin-left: 1%;
            margin-top: 0.4%;
        }
    }

    .browse_all_products:hover {
        background-color: #fff;
        border-color: #f16d7f;

        p {
            color: #f16d7f;
        }

        .arrow-right {
            color: #f16d7f;
        }
    }
}
</style>
