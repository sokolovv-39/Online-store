<template>
    <div class="product_card">
        <RouterLink @click.capture="handleRoute"
            :to="isGoProductPage ? {name: 'product', params: {id: props.id_product}} : ''" class="wrapper">
            <font-awesome-icon v-show="props.inCart" @click="deleteProduct" class="deleteProduct"
                icon="fa-solid fa-trash" />
            <a class="product_card_link">
                <img :class="{ product_photo: !props.inCart }" :src="image" alt="white_T-shirt">
                <div class="product_card_text">
                    <div>
                        <h4 class="product_name">{{ title }}</h4>
                        <h4 class="price">{{ price }}</h4>
                    </div>
                    <input v-show="props.inCart" type="number" :value="props.quantity" min="1"
                        @input="updateQuantity" />
                </div>
            </a>
            <div class=" cart-box">
                <a v-show="!props.inCart" class="cart-link" @click="addToCart">
                    <i class="bi bi-cart3"></i>
                    <p class="add-text">Add to Cart</p>
                </a>
            </div>
            <div class="product_card_small">
                <a class="product_card_link" href="">
                    <img src="@/assets/images/white_T-shirt.jpg" alt="white_T-shirt">
                    <div class="product_card_text">
                        <h4 class="product_name">{{ title }}</h4>
                        <h4 class="price">{{ price }}</h4>
                    </div>
                </a>
            </div>
        </RouterLink>
    </div>
</template>

<script setup>
import { useServerRequestsStore } from '@/stores/serverRequests';
import { useGlobalStore } from '@/stores/globalStore';
import { ref, defineEmits, defineProps } from 'vue';

const serverRequests = useServerRequestsStore();
const globalStore = useGlobalStore();
const props = defineProps({
    id_product: Number,
    title: String,
    price: String,
    image: String,
    quantity: Number,
    inCart: Boolean
});
console.log('prod props');
console.log(props.id_product)
const emit = defineEmits(['updateCartList']);
const isGoProductPage = ref(true);

function handleRoute(e) {
    const classList = e.target.classList;
    if (classList.contains('cart-link') || classList.contains('bi bi-cart3') || classList.contains('add-text')) isGoProductPage.value = false
    else isGoProductPage.value = true;
}
function addToCart() {
    globalStore.cartPopup = true;
    globalStore.popupProd = props.id_product;
}
function deleteProduct() {
    serverRequests.authRequest('http://localhost:3000/api/auth/verify', globalStore.token)
        .then((response) => {
            if (response.ok) {
                if (isDelete) {
                    serverRequests.postRequest('http://localhost:3000/api/products/deleteFromCart', new URLSearchParams(props))
                        .then(response => {
                            emit('updateCartList');
                            if (response.ok) alert(`${props.title} удален из корзины`);
                        })
                }
            }
            else alert('Произошла непредвиденная ошибка. Попробуйте позже')
        })
    const isDelete = confirm(`Вы действительно хотите удалить из корзины ${props.title}?`);
}
function updateQuantity(e) {
    serverRequests.authRequest('http://localhost:3000/api/auth/verify', globalStore.token)
        .then((response) => {
            if (response.ok) {
                let body = {}
                for (let key in props) {
                    body[key] = props[key]
                }
                body.quantity = e.target.value
                serverRequests.postRequest('http://localhost:3000/api/products/addToCart', new URLSearchParams(body))
            }
            else alert('Произошла непредвиденная ошибка. Попробуйте позже')
        })
}
</script>

<style scoped lang="scss">
.wrapper {
    text-decoration: none;

    .product_card {
        margin: 60px auto;
        position: relative;
        cursor: pointer;

        .deleteProduct {
            position: absolute;
            top: 2%;
            left: 93%;
        }

        .deleteProduct:hover {
            color: red;
            cursor: pointer;
        }

        .product_card_link {
            text-decoration: none;
            display: block;
        }

        .product_card_text {
            padding-left: 6%;

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

            .price {
                color: #f16d7f;
                font-family: Lato;
                font-size: 16px;
                font-weight: 700;
                text-transform: uppercase;
                margin: auto auto 21px 0;
            }
        }

        .cart-box {
            position: absolute;
            top: 98px;
            justify-content: center;
            width: 100%;
            display: none;

            .cart-link {
                cursor: pointer;
                display: flex;
                padding: 0 5px;
                text-decoration: none;
                border: 1px solid #fff;
                justify-content: center;
                align-items: center;

                .bi-cart3 {
                    color: #fff;
                    margin-right: 4px;
                    font-size: 18px;
                    display: flex;
                    align-items: center;
                }

                .add-text {
                    font-family: Lato;
                    font-size: 13px;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 15px auto;
                }
            }

            .cart-link:hover {
                transform: scale(1.3);
                transition: all 0.5s;
            }
        }

        .product_card_small {
            transform: scale(0.3);
            box-shadow: 0 6px 8px rgba(0, 0, 0, 16);
            background-color: #fff;
            z-index: 11;
            display: none;
        }
    }

    .product_card:hover {
        box-shadow: 0 6px 8px rgba(0, 0, 0, 16);

        .cart-box {
            display: flex;
        }

        .product_photo {
            filter: brightness(30%);
        }
    }
}
</style>