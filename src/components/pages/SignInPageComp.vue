<template>
    <form method="post" action="http://localhost:3000/api/auth/signin" @submit="sendForm">
        <h1>Sign in to your <span>BrandShop</span> profile</h1>
        <fieldset>
            <ul>
                <li>
                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="useremail">
                </li>
                <li>
                    <label for="pwd"></label>
                    <input type="password" id="pwd" name="password">
                </li>
            </ul>
            <p>
                <button type="submit">Sign in</button>
            </p>
        </fieldset>
    </form>
    <p v-if="isSignIn" class="unauthorized-message">Неверный логин или пароль</p>
    <p>Haven't registered yet? <router-link to="sign_Up" class="non-dec">Sign up!</router-link></p>
    <router-link to="/" class="non-dec">Go home</router-link>
</template>

<script setup>
import { useServerRequestsStore } from "@/stores/serverRequests.js";
import { useGlobalStore } from "@/stores/globalStore.js";
import { useUserStore } from "@/stores/userStore";
import { router } from '@/router';
import { ref } from "vue";

let isSignIn = ref(false);
const globalStore = useGlobalStore();
const serverRequests = useServerRequestsStore();
const userStore = useUserStore();

async function sendForm(event) {
    event.preventDefault();
    const response = await serverRequests.postRequest(event.target.action, new URLSearchParams(new FormData(event.target)));
    if (response.ok) {
        isSignIn.value = false;
        globalStore.isSignIn = true;
        const userData = await response.json();
        globalStore.token = userData.userToken;
        userStore.$patch({
            name: userData.name,
            surname: userData.surname,
            email: userData.email
        })
        router.push('/');
    }
    else {
        isSignIn.value = true
    }
}
</script>

<style scoped lang="scss">
.unauthorized-message {
    color: red;
}

.non-dec {
    text-decoration: none;
}
</style>