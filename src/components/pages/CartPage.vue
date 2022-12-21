<template>
    <div class="wrapper">
        <div class="top">
            <HeaderComp />
            <div class="content">
                <h1 class="header">My cart</h1>
                <div v-if="isEmpty">
                    <h1 class="empty-cart-text">Корзина пуста</h1>
                </div>
                <div v-else>
                    <div class="cart-wrapper">
                        <div class="table-header">
                            <h3>№</h3>
                            <h3>Product</h3>
                            <h3>Size</h3>
                            <h3>Color</h3>
                            <h3>Quantity</h3>
                            <h3>Price</h3>
                            <h3>Total</h3>
                        </div>
                        <div class="product-row" v-for="product of productsCart" :key="product.title">
                            <div>
                                <p class="text-style bold-style">{{ product.id }}</p>
                            </div>
                            <div class="title-photo">
                                <h4 class="text-style bold-style">{{ product.title }}</h4>
                                <img :src="product.image" :alt="`${product.title} photo`">
                            </div>
                            <div>
                                <p class="text-style">{{ product.size }}</p>
                            </div>
                            <div>
                                <p class="text-style">{{ product.color.charAt(0).toUpperCase() + product.color.slice(1)
                                }}</p>
                            </div>
                            <div>
                                <p>{{ product.quantity }}</p>
                            </div>
                            <div>
                                <p class="text-style bold-style">{{ product.price }}</p>
                            </div>
                            <div>
                                <p class="text-style bold-style">{{ totalProduct(product) }}$</p>
                            </div>
                            <div class="trash">
                                <font-awesome-icon icon="fa-solid fa-trash" @click="deleteFromCart(product)" />
                            </div>
                        </div>
                    </div>
                    <div class="total-sum">
                        <h2>Total:</h2>
                        <p>{{ totalPrice() }}$</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <FooterComp />
        </div>
    </div>
</template>

<script setup>
import HeaderComp from '../HeaderComp.vue';
import FooterComp from '../FooterComp.vue';
import { useServerRequestsStore } from '@/stores/serverRequests';
import { onMounted, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';

const serverRequests = useServerRequestsStore();
const globalStore = useGlobalStore();
const productsCart = ref();
const isEmpty = ref(true);

function getCart() {
    serverRequests.getJSON('http://localhost:3000/api/products/getCart')
        .then(products => {
            products.forEach((product, index) => product['id'] = index + 1);
            console.log('arr');
            console.log(products);
            if (products.length > 0) isEmpty.value = false;
            else isEmpty.value = true;
            productsCart.value = products;
        })
}
function totalProduct(product) {
    const total = parseInt(product.price) * product.quantity;
    return total;
}
function totalPrice() {
    const total = productsCart.value.reduce((sum, product) => sum + parseInt(product.price), 0);
    console.log('total');
    console.log(total)
    return total
}
function deleteFromCart(product) {
    console.log('Событие вызвано');
    console.log(product)
    serverRequests.authRequest('http://localhost:3000/api/auth/verify', globalStore.token)
        .then(response => {
            console.log('auth comp')
            if (response.ok) {
                serverRequests.postRequest('http://localhost:3000/api/products/deleteFromCart', new URLSearchParams(product))
                    .then(response_2 => {
                        if (response_2.ok) {
                            console.log('res2 ok')
                            getCart();
                        }
                    })
            }
        })
}

onMounted(() => {
    getCart();
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

            .total-sum {
                display: flex;
                align-items: center;

                h2 {
                    margin-right: 1%;
                    font-size: 50px;
                }

                p {
                    margin-top: 0.5%;
                    color: #ef5b70;
                    font-size: 44px;
                }
            }

            .empty-cart-text {
                text-align: center;
            }

            .header {
                text-align: center;
                margin-bottom: 2%;
            }

            .cart-wrapper {

                .table-header {
                    display: grid;
                    grid-template-columns: 1fr 2fr repeat(6, 1fr);
                    text-align: center;
                    margin-bottom: 2%;
                }

                .product-row {
                    display: grid;
                    grid-template-columns: 1fr 2fr repeat(6, 1fr);
                    justify-items: center;
                    margin-bottom: 2%;
                    align-items: center;

                    .trash {
                        justify-self: start;
                    }

                    .trash:hover {
                        color: red;
                        cursor: pointer;
                    }

                    .text-style {
                        font-family: Lato;
                        font-size: 13px;
                        font-weight: 400;
                        color: #656565;
                    }

                    .bold-style {
                        font-family: Lato;
                        font-size: 13px;
                        font-weight: 900;
                        text-transform: uppercase;
                        color: #222222;
                    }

                    .title-photo {
                        justify-content: space-around;
                        display: flex;
                        align-items: center;

                        img {
                            width: 30%;
                        }
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