<template>
    <div>
        <a class="shopping_cart_link" href="shopping_cart.html">
            <i class="fa-solid fa-circle">
            </i>
            <i class="bi bi-cart3"></i>
        </a>
        <details class="my_account">
            <summary class="text_my_account">
                <p>My Account</p>
                <i class="fa-solid fa-sort-down"></i>
            </summary>
        </details>
    </div>
</template>

<style scoped lang="scss">
div {
    display: flex;
    padding-top: 28px;
    background-color: #fff;
    z-index: 10;

    .shopping_cart_link {
        position: relative;
        font-size: 30px;

        .fa-circle {
            display: none;
            color: red;
            position: absolute;
            left: 62%;
        }

        .bi-cart3 {
            font-size: 34px;
            color: #222222;
        }
    }

    .shopping_cart_link:hover {
        transform: scale(1.4);
        transition: all 0.5s;
    }

    .my_account {
        width: 130px;
        height: 38px;
        background-color: #f16d7f;
        margin-left: 18px;
        border-radius: 3px;
        border: 1px solid #f16d7f;
        transition: all 0.5s;

        summary {
            font-family: Lato;
            font-size: 15px;
            font-weight: 400;
            line-height: 38px;
            letter-spacing: 0.025em;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            p {
                padding-right: 9px;
            }

            i {
                padding-bottom: 4.5px;
            }
        }
    }

    .my_account:hover {
        background-color: #fff;
        border: 1px solid #f16d7f;

        summary {
            color: #f16d7f;
        }
    }
}
</style>