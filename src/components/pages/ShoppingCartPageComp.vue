<template>
    <div class="wrapper">
        <div class="top">
            <HeaderComp />
            <BreadCrumbsPanelComp />
            <div class="content">
                <section class="added-products-cart">
                    <div class="added-products-cart-row">
                        <div class="cart_columns">
                            <h3>PRODUCT DETAILS</h3>
                        </div>
                        <div class="cart_columns">
                            <h3>UNITE PRICE</h3>
                        </div>
                        <div class="cart_columns">
                            <h3>QUANTITY</h3>
                        </div>
                        <div class="cart_columns">
                            <h3>SHIPPING</h3>
                        </div>
                        <div class="cart_columns">
                            <h3>SUBTOTAL</h3>
                        </div>
                        <div class="cart_columns">
                            <h3>ACTION</h3>
                        </div>
                    </div>
                    <ProductInCartComp />
                </section>
            </div>
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
import ProductInCartComp from '@/components/ProductInCartComp.vue'
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

            .added-products-cart {
                max-width: 80%;
                margin: 90px auto 63px auto;

                .added-products-cart-row {
                    display: grid;
                    grid-template-columns: 3fr repeat(5, 1fr);
                    padding-bottom: 20px;
                    border-bottom: 1px solid #eaeaea;
                    margin-bottom: 20px;

                    .cart_columns {
                        font-family: Lato;
                        font-size: 13px;
                        line-height: 20px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: -0.015em;
                        color: #222222;
                        text-align: center;
                    }

                    .cart_columns:first-of-type {
                        text-align: left;
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