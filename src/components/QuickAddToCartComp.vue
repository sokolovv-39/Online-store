<template>
    <div class="popupWindow" :style="styleObj">
        <div class="wrapper">
            <div class="product_desc">
                <img class="product_photo" :src="cartPopup.image" alt="white_T-shirt">
                <h3>{{ cartPopup.title }}</h3>
                <p>Material: cotton</p>
                <p>Designer: Bin Burhan</p>
                <p>{{ cartPopup.price }}</p>
            </div>
            <div class="client_choice">
                <form action="/api/addToCart">
                    <h5>Place your order</h5>
                    <fieldset>
                        <p>
                            <label for="size">Choose size</label>
                            <select id="size" name="size" required>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </p>
                        <p>
                            <label for="color">Choose color</label>
                            <select id="color" name="color" required>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="yellow">Yellow</option>
                                <option value="blue">Blue</option>
                                <option value="orange">Orange</option>
                                <option value="black">Black</option>
                            </select>
                        </p>
                        <p>
                            <label for="quantity">Quantity</label>
                            <input type="number" id="quantity" name="quantity" required min="1" value="1">
                        </p>
                    </fieldset>
                    <p>Total price: <span>$1000</span></p>
                    <p>
                        <button type="submit">Add to cart</button>
                    </p>
                    <p>
                        <button type="button">Cancel</button>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartPopupStore } from "@/stores/cartPopup.js"

const styleObj = ref({
    width: '50vw',
    height: '85vh'
})
styleObj.value.top = `${document.documentElement.clientHeight * (100 - parseInt(styleObj.value.height)) / 200}px`
styleObj.value.left = `${document.documentElement.clientWidth * (100 - parseInt(styleObj.value.width)) / 200}px`

const cartPopup = useCartPopupStore()
</script>

<style scoped lang="scss">
.popupWindow {
    position: fixed;
    background-color: #fff;
    box-shadow: 0 0 10px rgb(0 0 0 / 17%);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .wrapper {
        margin: 0 auto;
        display: flex;

        .product_desc {
            flex: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;

            margin-right: 8%;

            h3 {
                text-align: center;
                font-family: Lato;
                font-size: 18px;
                font-weight: 900;
                text-transform: uppercase;
                color: #4d4d4d;
                margin-top: 2%;
            }

            p {
                font-family: Lato;
                font-size: 18px;
                font-weight: 300;
                color: black;
                text-align: left;
                width: 100%;
                text-align: left;
                margin-left: 18%;
                margin-top: 5%;
            }
        }

        .client_choice {
            flex: 60%;
            padding-top: 3.6%;

            h5 {
                font-family: Lato;
                font-size: 16px;
                font-weight: 900;
                letter-spacing: 0.025em;
                color: #222224;
            }

            fieldset {
                border: none;
                margin-top: 4%;

                p {
                    margin-top: 3%;

                    label {
                        font-family: Lato;
                        font-size: 14px;
                        font-weight: 700;
                        color: #2f2f2f;
                        margin-right: 4%;
                    }

                    select,
                    input {
                        border: 1px solid #eaeaea;
                        font-family: Lato;
                        font-size: 13px;
                        font-weight: 400;
                        color: #bcbcbc;
                        padding-left: 10px;
                    }
                }
            }

            button {
                background-color: #f16d7f;
                border: 1px solid #f16d7f;
                cursor: pointer;
                text-decoration: none;
                color: #fff;
                transition: all 0.5s;
                width: 50%;
                height: 42px;
            }

            button:first-of-type {
                margin-bottom: 4%;
            }

            button:hover {
                color: #f16d7f;
                background-color: #fff;
            }

            p {
                font-family: Lato;
                font-size: 16px;
                font-weight: 900;
                color: #f16d7f;

                span {
                    color: black;
                }
            }
        }
    }
}
</style>