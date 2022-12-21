<template>
    <router-view></router-view>
</template>

<script setup>
import { useServerRequestsStore } from '@/stores/serverRequests.js';
import { useUserStore } from '@/stores/userStore.js';
import { useGlobalStore } from './stores/globalStore';
import { router } from './router.js';
import '@/assets/styles/main-styles.css';

const userStore = useUserStore();
const globalStore = useGlobalStore();
const serverRequestsStore = useServerRequestsStore();
router.push('/');

serverRequestsStore.backgroundAuth()
    .then(response => {
        if (response.ok) {
            return response.json()
        }
    })
    .then(userData => {
        if (userData !== 0) {
            globalStore.isSignIn = true;
            globalStore.token = userData.userToken;
            userStore.$patch({
                name: userData.name,
                surname: userData.surname,
                email: userData.email
            })
        }
    })
setInterval(() =>
    serverRequestsStore.authRequest('http://localhost:3000/api/auth/updateToken', globalStore.token)
        .then(response => {
            if (response.ok) {
                return response.text()
            }
        })
        .then(token => {
            if (token !== "0") {
                globalStore.token = token;
            }
        }), 870000
)
serverRequestsStore.getJSON('http://localhost:3000/api/products/getProducts')
    .then((data) => {
        globalStore.productsQuantity = data.length
    })
</script>

<style lang="scss">
:root {
    --swiper-theme-color: #ef5b70;
}
</style>