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
                <font-awesome-icon icon="fa-solid fa-caret-down" />
            </summary>
            <div class="my-profile">
                <h5>Hello, {{ userStore.name }}</h5>
                <router-link @click="authCheck()" :to="{ name: 'cart' }" class="router">My cart</router-link>
                <a class="exit" @click="signOut">Exit</a>
            </div>
        </details>
    </div>
</template>

<script setup>
import { useGlobalStore } from '@/stores/globalStore.js';
import { useUserStore } from '@/stores/userStore';
import { useServerRequestsStore } from '@/stores/serverRequests';

const userStore = useUserStore();
const globalStore = useGlobalStore();
const serverRequests = useServerRequestsStore();

function signOut() {
    serverRequests.globalExit()
        .then(response => {
            if (response.ok) {
                globalStore.isSignIn = false;
                userStore.$reset();
                globalStore.token = undefined;
            }
        })
}
</script>

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
        }

        .my-profile {
            display: flex;
            flex-direction: column;
            width: 119%;
            box-shadow: 0 0 10px rgb(0 0 0 / 17%);
            padding: 0;
            font-family: Lato;
            font-size: 18px;
            font-weight: 900;
            color: #4d4d4d;
            padding-left: 13%;
            padding-top: 13%;
            padding: 13% 11% 8% 13%;
            margin-bottom: 6%;

            .router {
                text-decoration: none;
                color: #bdb3b3;
                font-size: 17px;
                cursor: pointer;
                width: max-content;
                margin-top: 2%;
            }

            h5 {
                color: black;
                font-size: 22px;
            }

            a:last-of-type {
                margin-bottom: 0;
            }

            .exit {
                display: block;
                margin-right: 0;
                margin-left: auto;
                cursor: pointer;
                color: #bdb3b3;
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