<template>
    <div class="product_card">
        <a class="product_card_link" href="">
            <img class="product_photo" :src="image" alt="white_T-shirt">
            <div class="product_card_text">
                <h4 class="product_name">{{ title }}</h4>
                <h4 class="price">{{ price }}</h4>
            </div>
        </a>
        <div class="cart-box">
            <a class="cart-link" @click.once="openCartPopup">
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
    </div>
</template>

<script setup>
import { useGlobalStatesStore } from '@/stores/globalStates.js'
import { useCartPopupStore } from "@/stores/cartPopup.js"

const props = defineProps({
    title: String,
    price: String,
    image: String
})

const globalStates = useGlobalStatesStore()
const cartPopup = useCartPopupStore()
const openCartPopup = function () {
    globalStates.cartPopup = !globalStates.cartPopup
    cartPopup.$state = {
        title: props.title,
        price: props.price,
        image: props.image
    }
}
</script>

<style scoped lang="scss">
.product_card {
    margin: 60px auto;
    position: relative;

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
</style>