<template>
    <div class="added-products-cart-row">
        <div class="added_product">
            <a href="single_page.html"><img src="@/assets/images/black_jacket.jpg" alt="black_jacket"></a>
            <div class="added_product_description">
                <a href="single_page.html">
                    <h4>Mango People T-shirt</h4>
                </a>
                <a href="single_page.html">
                    <p><span>Color:</span>Red</p>
                </a>
                <a href="single_page.html">
                    <p><span>Size:</span>XII</p>
                </a>
            </div>
        </div>
        <div class="added_product_parameters"><span>$150</span></div>
        <div class="added_product_parameters">
            <div class="product_choice_form_element">

                <input type="number" id="quantity" required min="1" value="1">
            </div>
        </div>
        <div class="added_product_parameters"><span>FREE</span></div>
        <div class="added_product_parameters"><span>$300</span></div>
        <div class="cart_delete_button added_product_parameters"><i class="fa-solid fa-circle-xmark"></i>
        </div>
    </div>
</template>

<style scoped lang="scss">
.added-products-cart-row {
    display: grid;
    grid-template-columns: 3fr repeat(5, 1fr);
    padding-bottom: 20px;
    border-bottom: 1px solid #eaeaea;

    .added_product {
        display: flex;

        a {
            max-width: 45%;

            img {
                width: 100%;
            }
        }

        .added_product_description {
            a {
                text-decoration: none;
            }

            margin: auto 0 auto 5%;

            h4 {
                font-family: Lato;
                font-size: 13px;
                line-height: 1.2;
                font-weight: 900;
                text-transform: uppercase;
                color: #222222;
                margin-bottom: 32%;
            }

            p {
                font-family: Lato;
                font-size: 13px;
                line-height: 20px;
                color: #6f6e6e;

                span {
                    font-weight: 900;
                    color: #575757;
                    margin-right: 3%;
                }
            }
        }
    }

    .added_product_parameters {
        font-family: Lato;
        font-size: 13px;
        font-weight: 900;
        color: #656565;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        input {
            margin-top: 0;
            width: 38%;
            height: 35px;
            border: 1px solid #eaeaea;
            font-family: Lato;
            font-size: 13px;
            line-height: 24px;
            font-weight: 400;
            color: #bcbcbc;
            padding-left: 10px;
        }
    }

    .cart_delete_button {
        font-size: 16px;

        i:hover {
            color: red;
            cursor: pointer;
        }
    }
}
</style>