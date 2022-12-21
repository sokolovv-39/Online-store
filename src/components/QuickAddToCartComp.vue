<template>
    <div class="wrapper-qwkAdd">
        <BrandLogoComp class="logo" />
        <font-awesome-icon icon="fa-solid fa-circle-xmark" class="xmark" @click="globalStore.cartPopup = false" />
        <h1>Add to cart this product</h1>
        <img class="prodImg" :src="productInfo.image" :alt="`${productInfo.product_name} photo`">
        <form class="product_choice_form" action="http://localhost:3000/api/products/addToCart" @submit="sendForm">
            <div class="input_fields">
                <div class="product_choice_form_element">
                    <label for="color">CHOOSE COLOR</label>
                    <select id="color" required class="input-box" name="color">
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
                    <select name="size" id="size" required class="input-box">
                        <option class="checkbox" v-for="size of sizesArr" :value="size" :key="size">{{
                                size
                        }}</option>
                    </select>
                </div>
                <div class="product_choice_form_element quantity">
                    <label for="quantity">QUANTITY</label>
                    <input type="number" id="quantity" required min="1" value="1" class="input-box" name="quantity">
                </div>
            </div>
            <button class="add_to_cart_button" @click.capture="addProdToCart" type="submit">
                <i class="bi bi-cart3"></i>
                <p>Add to Cart</p>
            </button>
        </form>
        <router-link to="/">Смотреть подробную информацию о товаре</router-link>
    </div>
</template>

<script setup>
import { useGlobalStore } from '@/stores/globalStore';
import { useServerRequestsStore } from '@/stores/serverRequests';
import { ref, onMounted } from 'vue';
import BrandLogoComp from './BrandLogoComp.vue';

const productInfo = ref({});
const sizesArr = ref([]);
const globalStore = useGlobalStore();
const serverRequests = useServerRequestsStore();

function sendForm(e) {
    if (globalStore.isSignIn) {
        e.preventDefault();
        const formData = new FormData(e.target);
        productInfo.value['quantity'] = formData.get('quantity');
        for (let [name, value] of formData) {
            productInfo.value[`${name}`] = value
        }
        console.log(productInfo.value)
        serverRequests.authRequest('http://localhost:3000/api/auth/verify', globalStore.token)
            .then((response) => {
                if (response.ok) {
                    serverRequests.postRequest(e.target.action, new URLSearchParams(productInfo.value))
                        .then(response => {
                            if (response.ok) alert('Товар успешно добавлен в корзину');
                        })
                }
            })
    }
    else alert('Сначала зарегестрируйтесь')
}

onMounted(() => {
    serverRequests.postRequest('http://localhost:3000/api/products/getProduct', new URLSearchParams({
        id: globalStore.popupProd
    }))
        .then(response => response.json())
        .then(product => {
            productInfo.value = product;
            sizesArr.value = product.sizes.split(', ')
        })
})
</script>

<style scoped lang="scss">
.wrapper-qwkAdd {
    .logo {
        position: absolute;
        left: 1%;
        top: 3%;
    }

    .prodImg {
        margin: 0 auto;
        width: 56%;
        margin-bottom: 3%;
    }

    display: flex;
    flex-direction: column;
    position: fixed;
    padding: 0 6% 2% 6%;
    z-index: 1;
    top: 2vh;
    left: 24vw;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.17);
    border: 1px solid #ececec;
    background-color: #ffffff;

    h1 {
        text-align: center;
        margin: 13% 1% 1% 0;
    }

    .xmark {
        position: absolute;
        top: 6%;
        right: 4%;
        cursor: pointer;
    }

    .xmark:hover {
        color: red;
    }

    .product_choice_form {
        text-align: center;
        margin-bottom: 4%;

        .input_fields {
            display: grid;
            grid-template-columns: repeat(3, 1fr);

            .product_choice_form_element {
                display: flex;
                flex-direction: column;
                text-align: center;

                .input-box {
                    width: 73%;
                    margin: 0 auto;
                }
            }
        }

        .add_to_cart_button {
            padding: 2% 6%;
            margin-top: 2%;
        }
    }
}
</style>