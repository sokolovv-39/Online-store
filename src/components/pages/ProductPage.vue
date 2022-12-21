<template>
    <div class="wrapper">
        <HeaderComp />
        <div class="new_arrivals_block">
            <h2>NEW ARRIVALS</h2>
            <div class="bread_crumbs">
                <a href="index.html">HOME/</a>
                <a href="product.html">MEN/</a>
                <a href="single_page.html">NEW ARRIVALS</a>
            </div>
        </div>
        <main>
            <div class="main_product_photo_block">
                <swiper navigation :modules="swiperModules" :pagination="{
                    clickable: true,
                }">
                    <swiper-slide>
                        <img :src="productInfo.image" :alt="productInfo.product_name" />
                    </swiper-slide>
                    <swiper-slide>
                        <img :src="productInfo.image" :alt="productInfo.product_name" />
                    </swiper-slide>
                    <swiper-slide>
                        <img :src="productInfo.image" :alt="productInfo.product_name" />
                    </swiper-slide>
                </swiper>
            </div>
            <div class="product_description_wrapper">
                <article class="product_description">
                    <h4 class="product_collection">{{ productInfo.style ? productInfo.style.toUpperCase() : '' }}
                        COLLECTION</h4>
                    <div class="decoration-line">
                        <div class="grey_decoration_line"></div>
                        <div class="pink_decoration_line"></div>
                        <div class="grey_decoration_line"></div>
                    </div>
                    <h2 class="product_name">{{ productInfo.product_name }}</h2>
                    <p class="product_description_text">
                        Compellingly actualize fully researched processes before proactive outsourcing.
                        Progressively
                        syndicate collaborative architectures before cutting-edge services. Completely visualize
                        parallel
                        core competencies rather than exceptional portals.
                    </p>
                    <div class="material_designer">
                        <p>MATERIAL: <span>COTTON</span></p>
                        <p>DESIGNER: <span>BINBURHAN</span></p>
                    </div>
                    <h3 class="product_price">{{ productInfo.price }}</h3>
                    <br class="product_description_line">
                    <div class="order_parameters">
                    </div>
                    <hr class="product_description_line">
                    <form class="product_choice_form" action="http://localhost:3000/api/products/addToCart"
                        @submit="addToCart">
                        <div class="input_fields">
                            <div class="product_choice_form_element">
                                <label for="color">CHOOSE COLOR</label>
                                <select id="color" required name="color">
                                    <option value="red" class="checkbox">Red</option>
                                    <option value="green" class="checkbox">Green</option>
                                    <option value="yellow" class="checkbox">Yellow</option>
                                    <option value="blue" class="checkbox">Blue</option>
                                    <option value="orange" class="checkbox">Orange</option>
                                    <option value="black" class="checkbox">Black</option>
                                </select>
                            </div>
                            <div class="product_choice_form_element">
                                <label for="size">CHOOSE SIZE</label>
                                <select name="size" id="size" required>
                                    <option class="checkbox" v-for="size of sizesArr" :value="size" :key="size">{{
                                            size
                                    }}</option>
                                </select>
                            </div>
                            <div class="product_choice_form_element">
                                <label for="quantity">QUANTITY</label>
                                <input type="number" id="quantity" required min="1" value="1" name="quantity">
                            </div>
                        </div>
                        <button class="add_to_cart_button" type="submit">
                            <i class="bi bi-cart3"></i>
                            <p>Add to Cart</p>
                        </button>
                    </form>
                </article>
            </div>
        </main>
        <FooterComp />
    </div>
</template>

<script setup>
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import HeaderComp from '../HeaderComp.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import FooterComp from '../FooterComp.vue';
import { defineProps, ref } from 'vue';
import { onMounted } from 'vue';
import { useServerRequestsStore } from '@/stores/serverRequests';
import { useGlobalStore } from '@/stores/globalStore';
import { Navigation, Pagination } from 'swiper';

window.scrollTo(0, 0);
const productInfo = ref({});
const sizesArr = ref([]);
const props = defineProps({
    id: String
});
function addToCart(e) {
    if (globalStore.isSignIn) {
        e.preventDefault();
        const formData = new FormData(e.target);
        productInfo.value['quantity'] = formData.get('quantity');
        for (let [name, value] of formData) {
            productInfo.value[`${name}`] = value
        }
        console.log(productInfo.value)
        serverRequests.postRequest(e.target.action, new URLSearchParams(productInfo.value))
            .then(response => {
                if (response.ok) alert('Товар успешно добавлен в корзину');
            })

    }
    else alert('Сначала зарегестрируйтесь')
}
const swiperModules = [Navigation, Pagination];
const serverRequests = useServerRequestsStore()
const globalStore = useGlobalStore()
onMounted(() => {
    serverRequests.authRequest('http://localhost:3000/api/auth/verify', globalStore.token)
        .then(response => {
            if (response.ok) {
                serverRequests.postRequest('http://localhost:3000/api/products/getProduct', new URLSearchParams({
                    id: props.id
                }))
                    .then(response => response.json())
                    .then(product => {
                        productInfo.value = product;
                        sizesArr.value = product.sizes.split(', ')
                    })
            }
        })
})
</script>

<style scoped lang="scss">
.new_arrivals_block {
    display: flex;
    justify-content: space-between;
    height: 148px;
    background-color: #f8f3f4;

    h2 {
        font-family: Lato;
        font-size: 24px;
        line-height: 20px;
        font-weight: 900;
        text-transform: uppercase;
        color: #f16d7f;
        margin-top: 65px;
        margin-left: 100px;
    }

    .bread_crumbs {
        margin-top: 65px;
        margin-right: 160px;

        a {
            text-decoration: none;
            color: #636363;
            margin-left: -3px;
        }
    }

    .bread_crumbs a:last-of-type {
        color: #f16d7f;
    }
}

main {
    .main_product_photo_block {
        background-color: #f7f7f7;
        padding-bottom: 40px;
        z-index: -1;

        .swiper {
            margin: 0 auto;
            width: 42%;

            .swiper-slide img {
                width: 100%;
            }
        }

        .swiper-button-next {
            color: red;
        }
    }

    .product_description_wrapper {
        text-align: center;

        .product_description {
            width: 60%;
            display: inline-block;
            transform: translateY(-76px);
            background-color: #fff;
            padding-top: 73px;
            border: 1px solid #eaeaea;
            padding-bottom: 122px;

            .product_collection {
                font-family: Lato;
                font-size: 14px;
                line-height: 24px;
                font-weight: 700;
                color: #f16d7f;
                padding-left: 4px;
            }

            .decoration_line::before {
                display: inline-block;
                height: 100%;
                vertical-align: middle;
                content: "";
            }

            .product_name {
                font-family: Lato;
                font-size: 18px;
                line-height: 24px;
                font-weight: 900;
                text-transform: uppercase;
                color: #4d4d4d;
                margin-top: 9px;
                margin-bottom: 17px;
            }

            .product_description_text {
                font-family: Lato;
                font-size: 14px;
                line-height: 24px;
                font-weight: 300;
                color: #5e5e5e;
                width: 66%;
                margin: 0 auto;
                display: block;
            }

            .grey_decoration_line {
                height: 1px;
                background-color: #eaeaea;
                width: 42px;
                display: inline-block;
                margin-right: -0.25em;
                vertical-align: middle;
            }

            .pink_decoration_line {
                height: 3px;
                background-color: #ef5b70;
                width: 63px;
                display: inline-block;
                margin-right: -0.25em;
                vertical-align: middle;
            }

            .material_designer {
                display: flex;
                font-family: Lato;
                font-size: 14px;
                line-height: 24px;
                font-weight: 700;
                color: #b9b9b9;
                justify-content: space-between;
                margin: 28px auto 37px auto;
                width: 35%;
            }

            .product_price {
                font-family: Lato;
                font-size: 24px;
                line-height: 24px;
                font-weight: 700;
                color: #ef5b70;
                margin: 0 auto;
                padding-right: 25px;
            }

            .product_description_line {
                background-color: #eaeaea;
                width: 66%;
                margin: 43px auto 63px auto;
            }

            .product_choice_form {
                width: 84%;
                margin: 0 auto;

                .input_fields {
                    display: flex;
                    justify-content: space-between;
                    margin: auto auto 28px auto;

                    .product_choice_form_element {
                        .checkbox {
                            cursor: pointer;
                        }

                        select,
                        input {
                            width: 144px;
                            height: 35px;
                            border: 1px solid #eaeaea;
                            margin-top: 16px;
                            font-family: Lato;
                            font-size: 13px;
                            line-height: 24px;
                            font-weight: 400;
                            color: #bcbcbc;
                            padding-left: 10px;
                        }

                        label {
                            font-family: Lato;
                            font-size: 14px;
                            line-height: 24px;
                            font-weight: 700;
                            color: #2f2f2f;
                        }

                        option {
                            cursor: pointer;
                        }
                    }
                }
            }

            .add_to_cart_button {
                width: 537px;
                height: 55px;
                background-color: #ffffff;
                margin: 0 auto;
                border: 1px solid #ef5b70;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.5s;

                i {
                    color: #ef5b70;
                    font-size: 27px;
                }
            }

            .add_to_cart_button:hover {
                background-color: #ef5b70;

                p {
                    color: #fff;
                }

                i {
                    color: #fff;
                }
            }

            .add_to_cart_button p {
                font-family: Lato;
                font-size: 16px;
                line-height: 55px;
                font-weight: 700;
                color: #ef5b70;
                margin-left: 15px;
            }
        }
    }
}
</style>